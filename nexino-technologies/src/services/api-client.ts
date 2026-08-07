/**
 * API Client for NestJS backend integration.
 * Currently uses local data. Connect NEXT_PUBLIC_API_BASE_URL to enable live API.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  headers?: Record<string, string>;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiRequest<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError(503, 'API base URL is not configured. Set NEXT_PUBLIC_API_BASE_URL.');
  }

  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    method: options.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const message = await response.text().catch(() => 'Unknown error');
    throw new ApiError(response.status, message);
  }

  return response.json() as Promise<T>;
}

export const isApiConfigured = (): boolean => Boolean(API_BASE_URL);
