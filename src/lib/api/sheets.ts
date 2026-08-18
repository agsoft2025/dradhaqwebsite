/**
 * Google Sheets integration
 */

import { google } from 'googleapis';
import type { EnquiryFormData } from '@/types';
import { logError, logInfo } from '@/lib/utils/helpers';

function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID is missing');
  }

  if (!clientEmail) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL is missing');
  }

  if (!privateKey) {
    throw new Error('GOOGLE_PRIVATE_KEY is missing');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({
    version: 'v4',
    auth,
  });

  return {
    sheets,
    spreadsheetId,
  };
}

export async function saveToGoogleSheets(
  leadData: EnquiryFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const { sheets, spreadsheetId } = getSheetsClient();

    // 1. Check whether the header row exists
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:O1',
    });

    // 2. Add headers if row 1 is empty
    if (!headerResponse.data.values?.length) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:O1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              'Lead ID',
              'Timestamp',
              'Full Name',
              'Organization / Hospital',
              'Designation',
              'Email',
              'Phone',
              'Organization Type',
              'Service Interested',
              'Standard',
              'Current Status',
              'Preferred Contact',
              'Message',
              'Consent',
              'Status',
            ],
          ],
        },
      });
    }

    // 3. Prepare enquiry data
    const values = [
      [
        leadData.leadId,
        leadData.timestamp,
        leadData.fullName,
        leadData.organizationName,
        leadData.designation || '',
        leadData.email,
        leadData.phone,
        leadData.organizationType,
        leadData.servicesInterested?.join(', ') || '',
        leadData.standard || '',
        leadData.currentStatus || '',
        leadData.preferredContactMethod,
        leadData.message,
        leadData.consent ? 'Yes' : 'No',
        'New',
      ],
    ];

    // 4. Add enquiry below the headers
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:O',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    logInfo('Lead saved to Google Sheets', {
      leadId: leadData.leadId,
      updatedRange: response.data.updates?.updatedRange,
    });

    return {
      success: true,
    };
  } catch (error) {
    logError(error, 'saveToGoogleSheets');

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Failed to save to Google Sheets',
    };
  }
}

export async function getLeadsFromSheet(): Promise<any[]> {
  try {
    const { sheets, spreadsheetId } = getSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:O',
    });

    return response.data.values || [];
  } catch (error) {
    logError(error, 'getLeadsFromSheet');
    return [];
  }
}

export async function updateLeadStatus(
  leadId: string,
  status: string
): Promise<boolean> {
  try {
    const { sheets, spreadsheetId } = getSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:O',
    });

    const rows = response.data.values || [];

    const rowIndex = rows.findIndex(
      (row) => row[0] === leadId
    );

    if (rowIndex === -1) {
      logError(
        `Lead not found: ${leadId}`,
        'updateLeadStatus'
      );
      return false;
    }

    // Spreadsheet rows are 1-based.
    // rowIndex 0 = spreadsheet row 1.
    const sheetRow = rowIndex + 1;

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!O${sheetRow}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[status]],
      },
    });

    logInfo('Lead status updated', {
      leadId,
      status,
      row: sheetRow,
    });

    return true;
  } catch (error) {
    logError(error, 'updateLeadStatus');
    return false;
  }
}