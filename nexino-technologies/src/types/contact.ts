export type ContactService =
  | 'Digital Product Development'
  | 'AI and Business Automation'
  | 'Cloud and Infrastructure'
  | 'Data, Analytics and Research'
  | 'Engineering and Intelligent Systems'
  | 'Industry Solution'
  | 'Not Sure Yet';

export type ContactProjectType =
  | 'New project'
  | 'Improve an existing system'
  | 'Maintenance and support'
  | 'Research or prototype'
  | 'Consultation'
  | 'Other';

export type ContactBudget =
  | 'Not decided'
  | 'Below 500,000 RWF'
  | '500,000-1,000,000 RWF'
  | '1,000,000-3,000,000 RWF'
  | 'Above 3,000,000 RWF'
  | 'Prefer to discuss';

export type ContactMethod = 'Email' | 'Phone' | 'WhatsApp';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  selectedService: ContactService;
  selectedIndustry?: string;
  projectType: ContactProjectType;
  projectSummary: string;
  mainGoal: string;
  estimatedBudget: ContactBudget;
  preferredContactMethod: ContactMethod;
  preferredContactTime?: string;
  consent: boolean;
}

// NestJS API payload
export interface InquiryPayload extends ContactFormData {
  sourcePage?: string;
  relatedProjectSlug?: string;
  createdAt: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  id?: string;
}

