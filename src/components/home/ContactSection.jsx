/**
 * ContactSection — Light green contact band with details and the enquiry form.
 */
import { Mail, MapPin, Phone } from 'lucide-react';

import { Container, Reveal } from '../common';
import ContactForm from '../contact/ContactForm';
import { contact } from '../../data/site';
import { contactSection } from '../../data/homeContent';

const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

const ContactSection = () => {
  const { eyebrow, heading, subtext } = contactSection;

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-height)] bg-mint py-20 md:py-28"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal preset="fadeRight">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 max-w-lg font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {heading.before}
              <span className="text-blue">{heading.accent}</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {subtext}
            </p>

            <address className="mt-8 space-y-5 not-italic">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue shadow-sm">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-navy/80">
                    Address
                  </p>
                  <p className="mt-1 max-w-xs text-sm font-semibold leading-relaxed text-navy sm:text-base">
                    {contact.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue shadow-sm">
                  <Phone size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-navy/80">
                    Phone
                  </p>
                  <a
                    href={phoneHref}
                    className="mt-1 inline-flex min-h-8 items-center text-sm font-semibold text-navy transition-colors hover:text-blue focus-ring sm:text-base"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue shadow-sm">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-navy/80">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 inline-flex min-h-8 items-center break-all text-sm font-semibold text-navy transition-colors hover:text-blue focus-ring sm:text-base"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </address>
          </Reveal>

          <Reveal preset="fadeLeft" delay={0.1}>
            <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-[0_24px_60px_rgba(11,42,74,0.12)] sm:p-8">
              <h3 className="font-heading text-xl font-extrabold tracking-tight text-navy">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-muted">
                Share a few details and the right team will get back to you.
              </p>
              <div className="mt-5">
                <ContactForm variant="home" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
