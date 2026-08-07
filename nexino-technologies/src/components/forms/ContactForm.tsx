'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitInquiry } from '@/services/contact.service';
import type { ContactService } from '@/types/contact';

// ─── Zod schema ──────────────────────────────────────────────────────────────
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

// ─── Field components ─────────────────────────────────────────────────────────
function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-nexino-text mb-1.5">
      {children}
      {required && <span className="text-nexino-blue ml-1" aria-hidden="true">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1.5" role="alert">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full rounded-xl border px-4 py-3 text-sm text-nexino-text placeholder:text-nexino-text-secondary/60',
    'focus:outline-none focus:ring-2 focus:ring-nexino-blue/30 focus:border-nexino-blue transition-colors',
    'bg-white',
    hasError ? 'border-red-400 focus:ring-red-200' : 'border-nexino-border',
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────
export function ContactForm() {
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      selectedService: 'Not Sure Yet',
      projectType: 'New project',
      estimatedBudget: 'Not decided',
      preferredContactMethod: 'Email',
    },
  });

  // Preselect from query params
  useEffect(() => {
    const service = searchParams.get('service');
    const industry = searchParams.get('industry');
    const type = searchParams.get('type');

    const serviceMap: Record<string, ContactService> = {
      'corporate-websites': 'Digital Product Development',
      'custom-web-applications': 'Digital Product Development',
      'mobile-applications': 'Digital Product Development',
      'ecommerce-platforms': 'Digital Product Development',
      'saas-development': 'Digital Product Development',
      'ui-ux-design': 'Digital Product Development',
      'ai-automation': 'AI and Business Automation',
      'ai-and-business-automation': 'AI and Business Automation',
      'ai-agents': 'AI and Business Automation',
      'business-chatbots': 'AI and Business Automation',
      'whatsapp-automation': 'AI and Business Automation',
      'workflow-automation': 'AI and Business Automation',
      'customer-support-automation': 'AI and Business Automation',
      'digital-product-development': 'Digital Product Development',
      'cloud-and-infrastructure': 'Cloud and Infrastructure',
      'hosting-maintenance': 'Cloud and Infrastructure',
      'cloud-infrastructure': 'Cloud and Infrastructure',
      'system-integration': 'Cloud and Infrastructure',
      'data-analytics-and-research': 'Data, Analytics and Research',
      'data-analytics': 'Data, Analytics and Research',
      'business-intelligence': 'Data, Analytics and Research',
      'technical-research': 'Data, Analytics and Research',
      'engineering-and-intelligent-systems': 'Engineering and Intelligent Systems',
      'embedded-systems': 'Engineering and Intelligent Systems',
      'pcb-design': 'Engineering and Intelligent Systems',
      'hardware-software-integration': 'Engineering and Intelligent Systems',
      'intelligent-infrastructure': 'Engineering and Intelligent Systems',
    };

    if (service && serviceMap[service]) setValue('selectedService', serviceMap[service]);
    if (industry) setValue('selectedIndustry', industry);
    if (type === 'project') setValue('projectType', 'New project');
  }, [searchParams, setValue]);

  const onSubmit = async (data: FormValues) => {
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await submitInquiry({ ...data, sourcePage: '/contact' });

      if (!response.success) {
        setSubmitState('error');
        setErrorMessage(response.message);
        return;
      }

      setSubmitState('success');
    } catch {
      setSubmitState('error');
      setErrorMessage(
        'Something went wrong submitting your enquiry. Please email us directly at nexinotechinologies@gmail.com.',
      );
    }
  };

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
        <h3 className="text-2xl font-bold text-nexino-text">Enquiry received</h3>
        <p className="text-nexino-text-secondary max-w-md leading-relaxed">
          Thank you. We will review your submission and reach out via your preferred contact method.
          We aim to respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8" aria-label="Project enquiry form">
      {/* Error summary */}
      {Object.keys(errors).length > 0 && (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-xl"
          role="alert"
          aria-live="polite"
        >
          <p className="font-semibold text-red-700 text-sm mb-2">
            Please correct the following before submitting:
          </p>
          <ul className="text-sm text-red-600 space-y-1 list-disc list-inside">
            {Object.values(errors).map((err, i) => (
              <li key={i}>{err?.message as string}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Server error */}
      {submitState === 'error' && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3" role="alert">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-amber-800">{errorMessage}</p>
        </div>
      )}

      {/* Section 1 — About you */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-bold text-nexino-text border-b border-nexino-border pb-3 w-full">
          About your organisation
        </legend>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fullName" required>Full name</Label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className={inputClass(!!errors.fullName)}
              placeholder="Your full name"
              aria-required="true"
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              {...register('fullName')}
            />
            <FieldError message={errors.fullName?.message} />
          </div>

          <div>
            <Label htmlFor="email" required>Email address</Label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClass(!!errors.email)}
              placeholder="you@organisation.com"
              aria-required="true"
              {...register('email')}
            />
            <FieldError message={errors.email?.message} />
          </div>

          <div>
            <Label htmlFor="phone">Phone number</Label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass(!!errors.phone)}
              placeholder="+250 ..."
              {...register('phone')}
            />
            <FieldError message={errors.phone?.message} />
          </div>

          <div>
            <Label htmlFor="company">Organisation name</Label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              className={inputClass(!!errors.company)}
              placeholder="Company or organisation name"
              {...register('company')}
            />
            <FieldError message={errors.company?.message} />
          </div>
        </div>
      </fieldset>

      {/* Section 2 — Your project */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-bold text-nexino-text border-b border-nexino-border pb-3 w-full">
          About your project
        </legend>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="selectedService" required>What would you like Nexino to help you with?</Label>
            <select
              id="selectedService"
              className={inputClass(!!errors.selectedService)}
              aria-required="true"
              {...register('selectedService')}
            >
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
            <Label htmlFor="selectedIndustry">Who will use the solution?</Label>
            <select
              id="selectedIndustry"
              className={inputClass(!!errors.selectedIndustry)}
              {...register('selectedIndustry')}
            >
              <option value="">Select the main user group (optional)</option>
              <option value="customers">Customers or clients</option>
              <option value="staff">Staff or internal teams</option>
              <option value="students">Students or learners</option>
              <option value="patients">Patients or service users</option>
              <option value="field-teams">Field teams or technicians</option>
              <option value="management">Management or leadership</option>
              <option value="partners">Partners or stakeholders</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="projectType" required>Are you building something new or improving an existing system?</Label>
            <select
              id="projectType"
              className={inputClass(!!errors.projectType)}
              aria-required="true"
              {...register('projectType')}
            >
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
            <Label htmlFor="estimatedBudget" required>Is there an estimated budget?</Label>
            <select
              id="estimatedBudget"
              className={inputClass(!!errors.estimatedBudget)}
              aria-required="true"
              {...register('estimatedBudget')}
            >
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
          <Label htmlFor="projectSummary" required>What problem should the solution solve?</Label>
          <textarea
            id="projectSummary"
            rows={4}
            className={inputClass(!!errors.projectSummary)}
            placeholder="Describe the challenge, opportunity or change you want to make..."
            aria-required="true"
            {...register('projectSummary')}
          />
          <FieldError message={errors.projectSummary?.message} />
        </div>

        <div>
          <Label htmlFor="mainGoal" required>What features or outcomes matter most?</Label>
          <textarea
            id="mainGoal"
            rows={3}
            className={inputClass(!!errors.mainGoal)}
            placeholder="List the features, results or improvements that matter most..."
            aria-required="true"
            {...register('mainGoal')}
          />
          <FieldError message={errors.mainGoal?.message} />
        </div>
      </fieldset>

      {/* Section 3 — Preferences */}
      <fieldset className="space-y-5">
        <legend className="text-lg font-bold text-nexino-text border-b border-nexino-border pb-3 w-full">
          Contact preferences
        </legend>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="preferredContactMethod" required>How should we contact you?</Label>
            <select
              id="preferredContactMethod"
              className={inputClass(!!errors.preferredContactMethod)}
              aria-required="true"
              {...register('preferredContactMethod')}
            >
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
            <FieldError message={errors.preferredContactMethod?.message} />
          </div>

          <div>
            <Label htmlFor="preferredContactTime">Best time to reach you</Label>
            <input
              id="preferredContactTime"
              type="text"
              className={inputClass(!!errors.preferredContactTime)}
              placeholder="e.g. Weekday mornings, after 14:00"
              {...register('preferredContactTime')}
            />
          </div>
        </div>
      </fieldset>

      {/* Budget note */}
      <p className="text-xs text-nexino-text-secondary bg-nexino-off-white border border-nexino-border rounded-xl p-4 leading-relaxed">
        Budget ranges help us understand the context of your project and shape a realistic conversation.
        They are not fixed package prices. All budgets are welcome to enquire.
      </p>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 w-4 h-4 rounded border-nexino-border text-nexino-blue focus:ring-nexino-blue/30 shrink-0 cursor-pointer"
          aria-required="true"
          {...register('consent')}
        />
        <label htmlFor="consent" className="text-sm text-nexino-text-secondary leading-relaxed cursor-pointer">
          I agree that Nexino Technologies may use the information I have provided to respond to
          my enquiry. I understand this does not create any contractual obligation.{' '}
          <span className="text-nexino-blue">*</span>
        </label>
      </div>
      {errors.consent && (
        <FieldError message={errors.consent.message} />
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || submitState === 'loading'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-10 py-4 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px]"
      >
        {(isSubmitting || submitState === 'loading') ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          'Send Project Inquiry'
        )}
      </button>
    </form>
  );
}
