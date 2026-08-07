import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const runtime = 'nodejs';

const inquirySchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  company: z.string().optional().or(z.literal('')),
  selectedService: z.string().min(1),
  selectedIndustry: z.string().optional().or(z.literal('')),
  projectType: z.string().min(1),
  projectSummary: z.string().min(20),
  mainGoal: z.string().min(10),
  estimatedBudget: z.string().min(1),
  preferredContactMethod: z.string().min(1),
  preferredContactTime: z.string().optional().or(z.literal('')),
  consent: z.boolean(),
  sourcePage: z.string().optional(),
  relatedProjectSlug: z.string().optional(),
  createdAt: z.string().optional(),
});

const emailTo = process.env.EMAIL_TO || 'nexinotechinologies@gmail.com';
const smtpHost = process.env.EMAIL_HOST;
const smtpPort = Number(process.env.EMAIL_PORT || 587);
const smtpUser = process.env.EMAIL_USER;
const smtpPass = process.env.EMAIL_PASS;
const smtpSecure = process.env.EMAIL_SECURE === 'true';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nexinotechnologies.com';

function formatValue(value?: string) {
  return value && value.trim() ? value : 'Not provided';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function emailTemplate(payload: z.infer<typeof inquirySchema>) {
  const rows = [
    ['Full name', payload.fullName],
    ['Email address', payload.email],
    ['Phone number', formatValue(payload.phone)],
    ['Organisation', formatValue(payload.company)],
    ['Service of interest', payload.selectedService],
    ['Industry', formatValue(payload.selectedIndustry)],
    ['Project type', payload.projectType],
    ['What they need help with', payload.projectSummary],
    ['Main goal', payload.mainGoal],
    ['Estimated budget', payload.estimatedBudget],
    ['Preferred contact method', payload.preferredContactMethod],
    ['Preferred contact time', formatValue(payload.preferredContactTime)],
    ['Source page', formatValue(payload.sourcePage)],
    ['Related project', formatValue(payload.relatedProjectSlug)],
    ['Submitted at', payload.createdAt ? new Date(payload.createdAt).toLocaleString() : new Date().toLocaleString()],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #E5E7EB;background:#F8FAFC;color:#667085;font-size:13px;font-weight:600;width:240px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #E5E7EB;color:#101828;font-size:14px;line-height:1.6;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join('');

  const html = `
    <div style="margin:0;padding:0;background:#F4F7FB;font-family:Arial,Helvetica,sans-serif;color:#101828;">
      <div style="max-width:760px;margin:0 auto;padding:32px 16px;">
        <div style="background:#FFFFFF;border:1px solid #E4E7EC;border-radius:20px;overflow:hidden;box-shadow:0 16px 40px rgba(16,24,40,0.08);">
          <div style="background:#07111F;padding:28px 32px;">
            <div style="display:flex;flex-direction:column;gap:4px;">
              <div style="color:#FFFFFF;font-size:22px;font-weight:800;letter-spacing:-0.03em;">Nexino Technologies</div>
              <div style="color:#C7D2E2;font-size:13px;">New project enquiry</div>
            </div>
          </div>

          <div style="padding:28px 32px;">
            <h1 style="margin:0 0 10px;font-size:28px;line-height:1.2;color:#101828;">A new enquiry has been submitted.</h1>
            <p style="margin:0 0 22px;font-size:15px;line-height:1.7;color:#667085;">
              The form on ${escapeHtml(siteUrl)} has been completed. The details below are formatted for easy review.
            </p>

            <table style="width:100%;border-collapse:collapse;border:1px solid #E4E7EC;border-radius:16px;overflow:hidden;">
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>

          <div style="padding:18px 32px 28px;color:#667085;font-size:12px;line-height:1.6;">
            Reply directly to this email thread to contact ${escapeHtml(payload.fullName)}. The preferred contact method is ${escapeHtml(payload.preferredContactMethod)}.
          </div>
        </div>
      </div>
    </div>
  `;

  const text = rows
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');

  return { html, text };
}

export async function POST(request: Request) {
  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json(
      {
        success: false,
        message:
          'Email service is not configured yet. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER and EMAIL_PASS in your environment.',
      },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please complete the form correctly before submitting.',
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;
  const transport = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const { html, text } = emailTemplate(payload);
  const subject = `New enquiry from ${payload.fullName} - Nexino Technologies`;

  await transport.sendMail({
    from: `"Nexino Technologies" <${smtpUser}>`,
    to: emailTo,
    replyTo: payload.email,
    subject,
    text,
    html,
  });

  return NextResponse.json({
    success: true,
    message: 'Your enquiry has been sent successfully.',
  });
}
