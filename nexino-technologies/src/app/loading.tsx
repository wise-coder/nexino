import { BrandLogo } from '@/components/shared/BrandLogo';

export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white gap-6"
      aria-label="Loading page"
      role="status"
    >
      <BrandLogo variant="mark" className="h-14 animate-pulse" />

      {/* Spinner ring */}
      <div className="w-8 h-8 border-2 border-nexino-border border-t-nexino-blue rounded-full animate-spin" />

      <p className="text-nexino-text-secondary text-sm sr-only">Loading...</p>
    </div>
  );
}

