/**
 * Helper utility functions
 */

export const generateLeadId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `LEAD-${timestamp}-${random}`.toUpperCase();
};

export const formatTimestamp = (date: Date = new Date()): string => {
  return date.toISOString();
};

export const getClientIp = (req: any): string => {
  return (
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
};

export const getUtmParams = (searchParams: URLSearchParams) => {
  return {
    utmSource: searchParams.get('utm_source') || '',
    utmMedium: searchParams.get('utm_medium') || '',
    utmCampaign: searchParams.get('utm_campaign') || '',
  };
};

export const classNames = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getPageUrl = (pathname: string): string => {
  return `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
};

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export const logError = (error: any, context?: string): void => {
  if (!isProduction()) {
    console.error(`[ERROR ${context || ''}]`, error);
  }
  // Could be extended to send to error tracking service
};

export const logInfo = (message: string, data?: any): void => {
  if (!isProduction()) {
    console.log(`[INFO] ${message}`, data);
  }
};

export const formatServicesList = (services: string[]): string => {
  if (services.length === 0) return '';
  if (services.length === 1) return services[0];
  const all = services.slice(0, -1).join(', ');
  return `${all} and ${services[services.length - 1]}`;
};

export const getCurrentDateTime = (): string => {
  const now = new Date();
  return now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};
