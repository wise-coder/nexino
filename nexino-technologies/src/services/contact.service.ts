import type { InquiryPayload, InquiryResponse } from '@/types/contact';
import { apiRequest, isApiConfigured } from './api-client';

export async function submitInquiry(payload: Omit<InquiryPayload, 'createdAt'>): Promise<InquiryResponse> {
  const fullPayload: InquiryPayload = {
    ...payload,
    createdAt: new Date().toISOString(),
  };

  if (isApiConfigured()) {
    return apiRequest<InquiryResponse>('/contact/inquiries', {
      method: 'POST',
      body: fullPayload,
    });
  }

  const response = await fetch('/api/contact/inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fullPayload),
  });

  const data = (await response.json().catch(() => null)) as InquiryResponse | null;

  if (!response.ok || !data) {
    return {
      success: false,
      message:
        data?.message ?? 'The inquiry service is not currently available. Please contact us directly by email or phone.',
    };
  }

  return data;
}
