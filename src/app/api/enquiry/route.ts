import { NextRequest, NextResponse } from 'next/server';
import { validateEnquiryForm, sanitizeFormData } from '@/lib/validation/form';
import { generateLeadId, formatTimestamp, logError, logInfo } from '@/lib/utils/helpers';
import type { EnquiryFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as Partial<EnquiryFormData>;

    // Server-side validation
    const errors = validateEnquiryForm(data);
    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          error: errors.map(e => e.message).join(', '),
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitized = sanitizeFormData(data);

    // Generate Lead ID
    const leadId = generateLeadId();
    const timestamp = formatTimestamp();

    // Prepare lead data
    const leadData: EnquiryFormData = {
      ...sanitized,
      leadId,
      timestamp,
      consent: data.consent ?? false,
    } as EnquiryFormData;

    // TODO: Integrate with Google Sheets
    // const sheetsResult = await saveToGoogleSheets(leadData);

    // TODO: Send WhatsApp notification
    // const whatsappResult = await sendWhatsAppNotification(leadData);

    logInfo('New enquiry received', { leadId, email: leadData.email });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your enquiry. We will contact you soon.',
        leadId,
      } as ApiResponse,
      { status: 201 }
    );
  } catch (error) {
    logError(error, 'POST /api/enquiry');
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit enquiry',
        error: 'Internal server error',
      } as ApiResponse,
      { status: 500 }
    );
  }
}
