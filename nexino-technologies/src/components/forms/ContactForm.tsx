'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ContactService } from '@/types/contact';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  company: z.string().optional(),
  selectedService: z.enum([
    'Digital Product Development',
    'AI and Business Automation',
    'Cloud and Infrastructure',
    'Data, Analytics and Research',
    'Engineering and Intelligent Systems',
    'Industry Solution',
    'Not Sure Yet',
  ] as const),
  selectedIndustry: z.string().optional(),
  projectType: z.enum([
    'New project',
    'Improve an existing system',
    'Maintenance and support',
    'Research or prototype',
    'Consultation',
    'Other',
  ] as const),
  projectSummary: z.string().min(20, 'Please provide at least 20 characters describing your project.'),
  mainGoal: z.string().min(10, 'Please describe your main goal.'),
  estimatedBudget: z.enum([
    'Not decided',
    'Below 500,000 RWF',
    '500,000–1,000,000 RWF',
    '1,000,000–3,000,000 RWF',
    'Above 3,000,000 RWF',
    'Prefer to discuss',
  ] as const),
  preferredContactMethod: z.enum(['Email', 'Phone', 'WhatsApp'] as const),
  preferredContactTime: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to continue.' }) }),
});

type FormValues = z.infer<typeof schema>;

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-[13px] font-semibold text-nexino-dark mb-1.5">
      {children}
      {required && <span className="text-nexino-blue ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-[12px] text-red-600 flex items-center gap-1.5" role="alert">
      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    'w-full rounded-lg border px-3.5 py-2.5 text-[13.5px] text-nexino-dark bg-white',
    'placeholder:text-nexino-text-secondary/50',
    'focus:outline-none focus:ring-2 focus:ring-nexino-blue/20 focus:border-nexino-blue transition-colors',
    hasError ? 'border-red-400' : 'border-nexino-border',
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedService: 'Not Sure Yet',
      projectType: 'New project',
      estimatedBudget: 'Not decided',
      preferredContactMethod: 'Email',
    },
  });

  useEffect(() => {
    const service = searchParams.get('service');
    const industry = searchParams.get('industry');
    const type = searchParams.get('type');
    const serviceMap: Record<string, ContactService> = {
      'ai-automation': 'AI and Business Automation',
      'ai-and-business-automation': 'AI and Business Automation',
      'digital-product-development': 'Digital Product Development',
      'cloud-and-infrastructure': 'Cloud and Infrastructure',
      'data-analytics-and-research': 'Data, Analytics and Research',
      'engineering-and-intelligent-systems': 'Engineering and Intelligent Systems',
    };
    if (service && serviceMap[service]) setValue('selectedService', serviceMap[service]);
    if (industry) setValue('selectedIndustry', industry);
    if (type === 'project') setValue('projectType', 'New project');
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormValues) => {
    setSubmitState('loading');
    setErrorMessage('');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiUrl) {
        setSubmitState('error');
        setErrorMessage('Our contact system is not yet connected. Please email us directly at stevohsunb@gmail.com or call +250 781 361 789.');
        return;
      }
      const res = await fetch(`${apiUrl}/contact/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sourcePage: '/contact', createdAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitState('success');
    } catch {
      setSubmitState('error');
      setErrorMessage('Something went wrong. Please email us at stevohsunb@gmail.com.');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-nexino-green/10 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-nexino-green" aria-hidden="true" />
        </div>
        <h3 className="text-[1.3rem] font-bold text-nexino-dark">Enquiry received</h3>
        <p className="text-[0.9rem] text-nexino-text-secondary max-w-md leading-[1.7]">
          Thank you. We will review your submission and reach out via your preferred contact
          method within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8" aria-label="Project enquiry form">
      {/* Error summary */}
      {Object.keys(errors).length > 0 && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl" role="alert" aria-live="polite">
          <p className="font-semibold text-red-700 text-[13px] mb-2">Please correct the following:</p>
          <ul className="text-[13px] text-red-600 space-y-1 list-disc list-inside">
            {Object.values(errors).map((err, i) => (
              <li key={i}>{err?.message as string}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Server error */}
      {submitState === 'error' && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3" role="alert">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[13px] text-amber-800 leading-relaxed">{errorMessage}</p>
        </div>
      )}

      {/* Section 1 — About you */}
      <fieldset className="space-y-5">
        <legend className="text-[15px] font-bold text-nexino-dark border-b border-nexino-border pb-3 w-full mb-2">
          About you
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fullName" required>Full name</Label>
            <input id="fullName" type="text" autoComplete="name" placeholder="Your full name"
              className={inputCls(!!errors.fullName)} aria-required="true" {...register('fullName')} />
            <FieldError message={errors.fullName?.message} />
          </div>
          <div>
            <Label htmlFor="email" required>Email address</Label>
            <input id="email" type="email" autoComplete="email" placeholder="you@organisation.com"
              className={inputCls(!!errors.email)} aria-required="true" {...register('email')} />
            <FieldError message={errors.email?.message} />
          </div>
          <div>
            <Label htmlFor="phone">Phone number</Label>
            <input id="phone" type="tel" autoComplete="tel" placeholder="+250 ..."
              className={inputCls(!!errors.phone)} {...register('phone')} />
          </div>
          <div>
            <Label htmlFor="company">Organisation</Label>
            <input id="company" type="text" autoComplete="organization" placeholder="Company or organisation name"
              className={inputCls(!!errors.company)} {...register('company')} />
          </div>
        </div>
      </fieldset>

      {/* Section 2 — Your project */}
      <fieldset className="space-y-5">
        <legend className="text-[15px] font-bold text-nexino-dark border-b border-nexino-border pb-3 w-full mb-2">
          Your project
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="selectedService" required>Service of interest</Label>
            <select id="selectedService" className={inputCls(!!errors.selectedService)} aria-required="true" {...register('selectedService')}>
              <option value="Digital Product Development">Digital Product Development</option>
              <option value="AI and Business Automation">AI and Business Automation</option>
              <option value="Cloud and Infrastructure">Cloud and Infrastructure</option>
              <option value="Data, Analytics and Research">Data, Analytics and Research</option>
              <option value="Engineering and Intelligent Systems">Engineering and Intelligent Systems</option>
              <option value="Industry Solution">Industry Solution</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
            <FieldError message={errors.selectedService?.message} />
          </div>
          <div>
            <Label htmlFor="selectedIndustry">Industry</Label>
            <select id="selectedIndustry" className={inputCls(false)} {...register('selectedIndustry')}>
              <option value="">Select an industry (optional)</option>
              <option value="business-technologies">Business Technologies</option>
              <option value="mining-technologies">Mining Technologies</option>
              <option value="construction-technologies">Construction Technologies</option>
              <option value="health-technologies">Health Technologies</option>
              <option value="intelligent-infrastructure">Intelligent Infrastructure</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="projectType" required>Project type</Label>
            <select id="projectType" className={inputCls(!!errors.projectType)} aria-required="true" {...register('projectType')}>
              <option value="New project">New project</option>
              <option value="Improve an existing system">Improve an existing system</option>
              <option value="Maintenance and support">Maintenance and support</option>
              <option value="Research or prototype">Research or prototype</option>
              <option value="Consultation">Consultation</option>
              <option value="Other">Other</option>
            </select>
            <FieldError message={errors.projectType?.message} />
          </div>
          <div>
            <Label htmlFor="estimatedBudget" required>Estimated budget</Label>
            <select id="estimatedBudget" className={inputCls(!!errors.estimatedBudget)} aria-required="true" {...register('estimatedBudget')}>
              <option value="Not decided">Not decided yet</option>
              <option value="Below 500,000 RWF">Below 500,000 RWF</option>
              <option value="500,000–1,000,000 RWF">500,000–1,000,000 RWF</option>
              <option value="1,000,000–3,000,000 RWF">1,000,000–3,000,000 RWF</option>
              <option value="Above 3,000,000 RWF">Above 3,000,000 RWF</option>
              <option value="Prefer to discuss">Prefer to discuss</option>
            </select>
            <FieldError message={errors.estimatedBudget?.message} />
          </div>
        </div>
        <div>
          <Label htmlFor="projectSummary" required>Project summary</Label>
          <textarea id="projectSummary" rows={4} placeholder="Describe what you are building, improving or exploring..."
            className={inputCls(!!errors.projectSummary)} aria-required="true" {...register('projectSummary')} />
          <FieldError message={errors.projectSummary?.message} />
        </div>
        <div>
          <Label htmlFor="mainGoal" required>Main goal</Label>
          <textarea id="mainGoal" rows={3} placeholder="What does success look like for this project?"
            className={inputCls(!!errors.mainGoal)} aria-required="true" {...register('mainGoal')} />
          <FieldError message={errors.mainGoal?.message} />
        </div>
      </fieldset>

      {/* Section 3 — Preferences */}
      <fieldset className="space-y-5">
        <legend className="text-[15px] font-bold text-nexino-dark border-b border-nexino-border pb-3 w-full mb-2">
          Contact preferences
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="preferredContactMethod" required>Preferred contact method</Label>
            <select id="preferredContactMethod" className={inputCls(!!errors.preferredContactMethod)} aria-required="true" {...register('preferredContactMethod')}>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
            <FieldError message={errors.preferredContactMethod?.message} />
          </div>
          <div>
            <Label htmlFor="preferredContactTime">Preferred contact time</Label>
            <input id="preferredContactTime" type="text" placeholder="e.g. Weekday mornings, after 14:00"
              className={inputCls(false)} {...register('preferredContactTime')} />
          </div>
        </div>
      </fieldset>

      {/* Budget note */}
      <p className="text-[12px] text-nexino-text-secondary bg-nexino-off-white border border-nexino-border rounded-lg p-4 leading-[1.65]">
        Budget ranges help us understand the context of your project and shape a realistic conversation.
        They are not fixed package prices.
      </p>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox"
          className="mt-1 w-4 h-4 rounded border-nexino-border text-nexino-blue focus:ring-nexino-blue/30 shrink-0 cursor-pointer"
          aria-required="true" {...register('consent')} />
        <label htmlFor="consent" className="text-[13px] text-nexino-text-secondary leading-[1.65] cursor-pointer">
          I agree that Nexino Technologies may use the information I have provided to respond to my enquiry.{' '}
          <span className="text-nexino-blue">*</span>
        </label>
      </div>
      <FieldError message={errors.consent?.message} />

      <button
        type="submit"
        disabled={isSubmitting || submitState === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-nexino-blue text-white font-semibold px-8 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px]"
      >
        {(isSubmitting || submitState === 'loading') ? (
          <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />Submitting…</>
        ) : 'Submit Enquiry'}
      </button>
    </form>
  );
}
