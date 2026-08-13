/**
 * Type definitions for Drdha Q Healthcare Website
 */

export interface EnquiryFormData {
  fullName: string;
  organizationName: string;
  designation?: string;
  email: string;
  phone: string;
  organizationType: OrganizationType;
  servicesInterested: Service[];
  standard?: Accreditation;
  currentStatus?: CurrentStatus;
  preferredContactMethod?: ContactMethod;
  message: string;
  consent: boolean;
  timestamp?: string;
  leadId?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  sourcePagee?: string;
}

export type OrganizationType = 
  | 'Hospital' 
  | 'Corporate Hospital' 
  | 'Medical College' 
  | 'Dental College' 
  | 'Laboratory' 
  | 'Other';

export type Service = 
  | 'Healthcare Audit & Assessment'
  | 'ISO Certification Readiness'
  | 'Accreditation Support'
  | 'Quality Management Systems'
  | 'Clinical Governance & Patient Safety'
  | 'Training & Capacity Building'
  | 'Healthcare Sustainability';

export type Accreditation = 
  | 'ISO 9001' 
  | 'ISO 7101' 
  | 'NABH' 
  | 'NABL' 
  | 'JCI' 
  | 'ISO 15189' 
  | 'ISO 17025' 
  | 'Other';

export type CurrentStatus = 
  | 'Planning' 
  | 'Gap Assessment' 
  | 'Implementation' 
  | 'Certification Preparation' 
  | 'Renewal' 
  | 'Other';

export type ContactMethod = 
  | 'Phone' 
  | 'WhatsApp' 
  | 'Email';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  leadId?: string;
}

export interface GoogleSheetRow {
  'Lead ID': string;
  'Timestamp': string;
  'Name': string;
  'Organization': string;
  'Designation': string;
  'Email': string;
  'Phone': string;
  'Organization Type': string;
  'Service': string;
  'Standard': string;
  'Current Status': string;
  'Preferred Contact': string;
  'Message': string;
  'Source Page': string;
  'UTM Source': string;
  'UTM Medium': string;
  'UTM Campaign': string;
  'WhatsApp Notification Status': string;
  'Follow-up Status': string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: string;
  href: string;
  features?: string[];
}

export interface StandardsData {
  code: string;
  name: string;
  description: string;
  category: string;
  applications?: string[];
}

export interface IndustryData {
  name: string;
  description: string;
  challenges?: string[];
  solutions?: string[];
  icon?: string;
}

export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string[];
  ogType?: string;
}
