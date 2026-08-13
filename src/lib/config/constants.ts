/**
 * Application constants and configuration
 */

export const SITE_CONFIG = {
  name: 'Drdha Q Healthcare LLP',
  description: 'Healthcare Quality, Audit & Certification Readiness Partner',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://drdha-q-healthcare.com',
  email: 'info@drdha-q.com',
  phone: '+91-XXXXXXXXXX',
  whatsapp: '+91-XXXXXXXXXX',
  address: 'India', // To be updated by owner
};

export const SERVICES = {
  HEALTHCARE_AUDIT: 'Healthcare Audit & Assessment',
  ISO_CERTIFICATION: 'ISO Certification Readiness',
  ACCREDITATION_SUPPORT: 'Accreditation Support',
  QUALITY_MANAGEMENT: 'Quality Management Systems',
  CLINICAL_GOVERNANCE: 'Clinical Governance & Patient Safety',
  TRAINING: 'Training & Capacity Building',
  SUSTAINABILITY: 'Healthcare Sustainability',
};

export const ACCREDITATIONS = {
  ISO_9001: 'ISO 9001 - Quality Management',
  ISO_7101: 'ISO 7101 - Healthcare Quality Management',
  NABH: 'NABH - National Accreditation Board for Hospitals',
  NABL: 'NABL - National Accreditation Board for Testing and Calibration Laboratories',
  JCI: 'JCI - Joint Commission International',
  ISO_15189: 'ISO 15189 - Medical Laboratories',
  ISO_17025: 'ISO 17025 - Testing and Calibration Laboratories',
};

export const ORGANIZATION_TYPES = [
  'Hospital',
  'Corporate Hospital',
  'Medical College',
  'Dental College',
  'Laboratory',
  'Other',
];

export const CURRENT_STATUS_OPTIONS = [
  'Planning',
  'Gap Assessment',
  'Implementation',
  'Certification Preparation',
  'Renewal',
  'Other',
];

export const CONTACT_METHODS = [
  'Phone',
  'WhatsApp',
  'Email',
];

export const INDUSTRIES = [
  'Hospitals',
  'Corporate Hospitals',
  'Medical Colleges',
  'Dental Colleges',
  'Laboratories',
  'Diagnostic Centers',
  'Healthcare Networks',
];

export const APPROACH_STEPS = [
  { step: 'Discover', description: 'Understand your organization' },
  { step: 'Assess', description: 'Conduct gap analysis' },
  { step: 'Plan', description: 'Develop action plan' },
  { step: 'Implement', description: 'Execute improvements' },
  { step: 'Train', description: 'Build organizational capability' },
  { step: 'Audit', description: 'Internal audit readiness' },
  { step: 'Improve', description: 'Continuous improvements' },
  { step: 'Certify', description: 'Achieve accreditation/certification' },
];

// API Configuration
export const API_CONFIG = {
  TIMEOUT: 30000, // 30 seconds
  RATE_LIMIT: 5, // requests
  RATE_LIMIT_WINDOW: 60000, // 1 minute
};

// Form Validation
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, // International format
};

// Security
export const SECURITY = {
  SPAM_THRESHOLD: 5, // Multiple submissions from same IP
  SPAM_TIME_WINDOW: 3600000, // 1 hour
};
