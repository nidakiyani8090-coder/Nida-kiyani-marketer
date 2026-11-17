import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { CONTACT_DETAILS, isEditablePlaceholder } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ContactProps {
  prefilledSubject: string;
}

interface FormFields {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmissionFeedback {
  kind: 'sent' | 'recorded_no_smtp' | 'error';
  text: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Contact({ prefilledSubject }: ContactProps) {
  const [fields, setFields] = useState<FormFields>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<SubmissionFeedback | null>(null);
  const [placeholderNotice, setPlaceholderNotice] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (prefilledSubject) {
      setFields((prev) => ({
        ...prev,
        subject: prefilledSubject,
      }));
      setErrors((prev) => ({ ...prev, subject: undefined }));
    }
  }, [prefilledSubject]);

  const validate = (data: FormFields) => {
    const nextErrors: Partial<Record<keyof FormFields, string>> = {};
    if (data.fullName.trim().length < 2) {
      nextErrors.fullName =
        'Please enter your full name (at least 2 characters).';
    }
    if (!EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (data.subject.trim().length < 3) {
      nextErrors.subject = 'Please enter a subject for your message.';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message =
        'Please include a brief message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fields.fullName.trim(),
          email: fields.email.trim(),
          subject: fields.subject.trim(),
          message: fields.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors && typeof data.fieldErrors === 'object') {
          setErrors(data.fieldErrors);
        }
        setFeedback({
          kind: 'error',
          text:
            data.message ||
            'Unable to process your submission right now. Please review your details and try again.',
        });
        return;
      }

      if (data.emailDelivered === true) {
        setFeedback({
          kind: 'sent',
          text:
            data.message ||
            'Thank you! Your message has been sent directly to Nida Kiyani.',
        });
        setFields({ fullName: '', email: '', subject: '', message: '' });
      } else {
        setFeedback({
          kind: 'recorded_no_smtp',
          text:
            data.message ||
            'Your inquiry has been saved to the server, however automated email delivery is not yet configured. Please also reach out using the direct contact details.',
        });
      }
    } catch {
      setFeedback({
        kind: 'error',
        text: 'A network error occurred while submitting your message. Please try again or reach out using the direct contact channels.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailIsPlaceholder = isEditablePlaceholder(CONTACT_DETAILS.email);
  const whatsappIsPlaceholder = isEditablePlaceholder(CONTACT_DETAILS.whatsapp);
  const linkedinIsPlaceholder = isEditablePlaceholder(
    CONTACT_DETAILS.linkedinUrl
  );

  const sanitizedWhatsapp = CONTACT_DETAILS.whatsapp.replace(/[^\d]/g, '');

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#6D263C] text-[#FAF8F4]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Details */}
          <Reveal className="lg:col-span-5">
            <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#EDE5DB]/80 uppercase mb-3">
              LET&apos;S CONNECT
            </p>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.18] text-[#FAF8F4] mb-5">
              Have a Project or Opportunity in Mind?
            </h2>
            <p className="font-sans text-[15px] lg:text-[16px] leading-[1.75] text-[#FAF8F4]/85 mb-9">
              I&apos;m always interested in connecting with creative people,
              exploring new opportunities and learning about meaningful
              projects.
            </p>

            <div className="space-y-4 border-t border-[#FAF8F4]/20 pt-7">
              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#FAF8F4]/10 border border-[#FAF8F4]/15 flex items-center justify-center shrink-0 text-[#FAF8F4]">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-sans text-[11.5px] uppercase tracking-[0.14em] text-[#EDE5DB]/75">
                    Email
                  </p>
                  {emailIsPlaceholder ? (
                    <button
                      type="button"
                      onClick={() =>
                        setPlaceholderNotice(
                          'Update CONTACT_DETAILS.email in src/data/portfolioData.ts to enable direct mailto links.'
                        )
                      }
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289] text-left cursor-pointer"
                    >
                      {CONTACT_DETAILS.email}
                    </button>
                  ) : (
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289]"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  )}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#FAF8F4]/10 border border-[#FAF8F4]/15 flex items-center justify-center shrink-0 text-[#FAF8F4]">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-sans text-[11.5px] uppercase tracking-[0.14em] text-[#EDE5DB]/75">
                    WhatsApp
                  </p>
                  {whatsappIsPlaceholder ? (
                    <button
                      type="button"
                      onClick={() =>
                        setPlaceholderNotice(
                          'Update CONTACT_DETAILS.whatsapp in src/data/portfolioData.ts to enable WhatsApp chat links.'
                        )
                      }
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289] text-left cursor-pointer"
                    >
                      {CONTACT_DETAILS.whatsapp}
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${sanitizedWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289]"
                    >
                      {CONTACT_DETAILS.whatsapp}
                    </a>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-[#FAF8F4]/10 border border-[#FAF8F4]/15 flex items-center justify-center shrink-0 text-[#FAF8F4]">
                  <Linkedin className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-sans text-[11.5px] uppercase tracking-[0.14em] text-[#EDE5DB]/75">
                    LinkedIn
                  </p>
                  {linkedinIsPlaceholder ? (
                    <button
                      type="button"
                      onClick={() =>
                        setPlaceholderNotice(
                          'Update CONTACT_DETAILS.linkedinUrl in src/data/portfolioData.ts to link your LinkedIn profile.'
                        )
                      }
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289] text-left cursor-pointer"
                    >
                      {CONTACT_DETAILS.linkedinUrl}
                    </button>
                  ) : (
                    <a
                      href={CONTACT_DETAILS.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[15px] font-medium text-[#FAF8F4] hover:text-[#EDE5DB] underline underline-offset-4 decoration-[#B98289]"
                    >
                      {CONTACT_DETAILS.linkedinUrl}
                    </a>
                  )}
                </div>
              </div>

              {placeholderNotice && (
                <div
                  role="status"
                  className="mt-4 rounded-xl bg-[#FAF8F4]/10 border border-[#FAF8F4]/25 px-4 py-3 text-[13px] text-[#FAF8F4] flex items-start gap-2.5"
                >
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#EDE5DB]" />
                  <span>{placeholderNotice}</span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#FAF8F4] text-[#282525] p-6 sm:p-9 shadow-[0_20px_50px_rgba(24,8,13,0.28)]"
            >
              <div className="mb-6">
                <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-[#282525]">
                  Send a Message
                </h3>
                <p className="font-sans text-[13.5px] text-[#77716D] mt-1">
                  All fields are required. Your message will be validated before
                  submission.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="contact-fullName"
                    className="block font-sans text-[13px] font-medium text-[#282525] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={fields.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? 'error-fullName' : undefined
                    }
                    className={`w-full min-h-[46px] rounded-xl bg-[#FFFFFF] px-4 py-2.5 text-[14.5px] text-[#282525] placeholder:text-[#77716D]/60 border transition-colors ${
                      errors.fullName
                        ? 'border-[#B91C1C]'
                        : 'border-[#282525]/15 focus:border-[#6D263C]'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      id="error-fullName"
                      className="mt-1.5 text-[12.5px] text-[#B91C1C] flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-sans text-[13px] font-medium text-[#282525] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full min-h-[46px] rounded-xl bg-[#FFFFFF] px-4 py-2.5 text-[14.5px] text-[#282525] placeholder:text-[#77716D]/60 border transition-colors ${
                      errors.email
                        ? 'border-[#B91C1C]'
                        : 'border-[#282525]/15 focus:border-[#6D263C]'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="error-email"
                      className="mt-1.5 text-[12.5px] text-[#B91C1C] flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contact-subject"
                  className="block font-sans text-[13px] font-medium text-[#282525] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={fields.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Collaboration, Internship, or Marketing Inquiry"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? 'error-subject' : undefined
                  }
                  className={`w-full min-h-[46px] rounded-xl bg-[#FFFFFF] px-4 py-2.5 text-[14.5px] text-[#282525] placeholder:text-[#77716D]/60 border transition-colors ${
                    errors.subject
                      ? 'border-[#B91C1C]'
                      : 'border-[#282525]/15 focus:border-[#6D263C]'
                  }`}
                />
                {errors.subject && (
                  <p
                    id="error-subject"
                    className="mt-1.5 text-[12.5px] text-[#B91C1C] flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block font-sans text-[13px] font-medium text-[#282525] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={fields.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Share a bit about your project, role, or inquiry..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'error-message' : undefined
                  }
                  className={`w-full rounded-xl bg-[#FFFFFF] px-4 py-3 text-[14.5px] text-[#282525] placeholder:text-[#77716D]/60 border transition-colors resize-y ${
                    errors.message
                      ? 'border-[#B91C1C]'
                      : 'border-[#282525]/15 focus:border-[#6D263C]'
                  }`}
                />
                {errors.message && (
                  <p
                    id="error-message"
                    className="mt-1.5 text-[12.5px] text-[#B91C1C] flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {feedback && (
                <div
                  role="alert"
                  className={`mb-6 rounded-xl border p-4 text-[13.5px] flex items-start gap-3 ${
                    feedback.kind === 'sent'
                      ? 'bg-[#ECFDF5] border-[#065F46]/25 text-[#065F46]'
                      : feedback.kind === 'recorded_no_smtp'
                      ? 'bg-[#EDE5DB]/70 border-[#6D263C]/30 text-[#282525]'
                      : 'bg-[#FEF2F2] border-[#B91C1C]/30 text-[#991B1B]'
                  }`}
                >
                  {feedback.kind === 'sent' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#065F46]" />
                  ) : feedback.kind === 'recorded_no_smtp' ? (
                    <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#6D263C]" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#B91C1C]" />
                  )}
                  <p className="leading-relaxed">{feedback.text}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#6D263C] px-8 py-3.5 text-[15px] font-medium text-[#FFFFFF] hover:bg-[#541B2D] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-65 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
