/**
 * Form validation utilities
 */

import { EnquiryFormData } from '@/types';
import { VALIDATION } from '@/lib/config/constants';

export interface ValidationError {
  field: string;
  message: string;
}

export const validateEnquiryForm = (data: Partial<EnquiryFormData>): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Full Name
  if (!data.fullName || data.fullName.trim().length < VALIDATION.MIN_NAME_LENGTH) {
    errors.push({
      field: 'fullName',
      message: 'Please enter a valid full name (minimum 2 characters)',
    });
  }

  // Organization Name
  if (!data.organizationName || data.organizationName.trim().length < 2) {
    errors.push({
      field: 'organizationName',
      message: 'Please enter your organization/hospital name',
    });
  }

  // Email
  if (!data.email || !VALIDATION.EMAIL_REGEX.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address',
    });
  }

  // Phone
  if (!data.phone || !VALIDATION.PHONE_REGEX.test(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Please enter a valid phone number',
    });
  }

  // Organization Type
  if (!data.organizationType) {
    errors.push({
      field: 'organizationType',
      message: 'Please select your organization type',
    });
  }

  // Services Interested
  if (!data.servicesInterested || data.servicesInterested.length === 0) {
    errors.push({
      field: 'servicesInterested',
      message: 'Please select at least one service',
    });
  }

  // Message
  if (!data.message || data.message.trim().length < VALIDATION.MIN_MESSAGE_LENGTH) {
    errors.push({
      field: 'message',
      message: `Please enter a message (minimum ${VALIDATION.MIN_MESSAGE_LENGTH} characters)`,
    });
  }

  if (data.message && data.message.length > VALIDATION.MAX_MESSAGE_LENGTH) {
    errors.push({
      field: 'message',
      message: `Message cannot exceed ${VALIDATION.MAX_MESSAGE_LENGTH} characters`,
    });
  }

  // Consent
  if (!data.consent) {
    errors.push({
      field: 'consent',
      message: 'Please accept the privacy policy',
    });
  }

  return errors;
};

export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, 1000); // Max 1000 characters
};

export const sanitizeFormData = (data: Partial<EnquiryFormData>): Partial<EnquiryFormData> => {
  return {
    ...data,
    fullName: sanitizeInput(data.fullName || ''),
    organizationName: sanitizeInput(data.organizationName || ''),
    designation: sanitizeInput(data.designation || ''),
    email: sanitizeInput(data.email || ''),
    phone: sanitizeInput(data.phone || ''),
    message: sanitizeInput(data.message || ''),
  };
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned;
};

export const isValidEmail = (email: string): boolean => {
  return VALIDATION.EMAIL_REGEX.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  return VALIDATION.PHONE_REGEX.test(phone);
};
