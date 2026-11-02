/**
 * ContactForm — Accessible enquiry form with validation, loading and success states.
 * Submission is handled by utils/sendContact, ready for EmailJS or a backend API.
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  Phone,
  Send,
  User,
} from 'lucide-react';

import { Button } from '../common';
import { contactSubjects } from '../../data/site';
import sendContact from '../../utils/sendContact';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  subject: contactSubjects[0],
  message: '',
  companyWebsite: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s-]{6,}$/;

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
};

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:ring-4';
const inputNormal =
  'border-slate-200 focus:border-accent focus:ring-accent/10';
const inputError = 'border-red-300 focus:border-red-400 focus:ring-red-100';

const FieldError = ({ id, children }) => (
  <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
    {children}
  </p>
);

/**
 * @param {object} props
 * @param {'compact'|'full'} [props.variant='compact'] Show the extra phone/subject fields.
 */
const ContactForm = ({ variant = 'compact' }) => {
  const withDetails = variant === 'full';
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* Honeypot — silently accept the submission so bots do not retry. */
    if (values.companyWebsite.trim()) {
      setSubmitted(true);
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    setLoading(true);

    try {
      await sendContact({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        subject: values.subject,
        message: values.message.trim(),
      });
      setSubmitted(true);
    } catch {
      setSubmitError(
        'Sorry, we could not send your message. Please try again or email us directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitError('');
    setSubmitted(false);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="contact-success"
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="flex min-h-[380px] flex-col items-center justify-center py-10 text-center"
        >
          <motion.span
            initial={{ scale: 0, rotate: -18 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal"
          >
            <CheckCircle2 size={34} aria-hidden="true" />
          </motion.span>
          <h3 className="mt-5 font-heading text-2xl font-bold text-navy">
            Message sent
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
            Thank you{values.name ? `, ${values.name}` : ''}. Your enquiry has
            been received and our team will be in touch.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={resetForm}
            className="mt-6"
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="contact-form"
          noValidate
          onSubmit={handleSubmit}
          aria-busy={loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative space-y-5"
        >
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="contact-company-website">Company website</label>
            <input
              id="contact-company-website"
              name="companyWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.companyWebsite}
              onChange={handleChange}
            />
          </div>

          <div className={withDetails ? 'grid gap-5 sm:grid-cols-2' : 'space-y-5'}>
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold text-navy"
              >
                Name <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <User
                  size={17}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  aria-required="true"
                  placeholder="Your full name"
                  className={`${inputBase} pl-11 ${
                    errors.name ? inputError : inputNormal
                  }`}
                />
              </div>
              {errors.name && <FieldError id="contact-name-error">{errors.name}</FieldError>}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold text-navy"
              >
                Email <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  aria-required="true"
                  placeholder="you@company.com"
                  className={`${inputBase} pl-11 ${
                    errors.email ? inputError : inputNormal
                  }`}
                />
              </div>
              {errors.email && (
                <FieldError id="contact-email-error">{errors.email}</FieldError>
              )}
            </div>

            {withDetails && (
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Phone{' '}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <div className="relative">
                  <Phone
                    size={17}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? 'contact-phone-error' : undefined
                    }
                    placeholder="+44 (0) 121 000 0000"
                    className={`${inputBase} pl-11 ${
                      errors.phone ? inputError : inputNormal
                    }`}
                  />
                </div>
                {errors.phone && (
                  <FieldError id="contact-phone-error">{errors.phone}</FieldError>
                )}
              </div>
            )}

            {withDetails && (
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Subject
                </label>
                <div className="relative">
                  <Briefcase
                    size={17}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    id="contact-subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    className={`${inputBase} appearance-none pl-11 pr-10 ${inputNormal}`}
                  >
                    {contactSubjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-navy"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={withDetails ? 6 : 5}
              value={values.message}
              onChange={handleChange}
              placeholder="How can we help?"
              className={`${inputBase} resize-none ${inputNormal}`}
            />
          </div>

          {submitError && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={17} aria-hidden="true" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-slate-400">
            Fields marked <span className="text-accent">*</span> are required.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
