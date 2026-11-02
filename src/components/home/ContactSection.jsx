/**
 * ContactSection — Mini contact form alongside UK head office details.
 */
import { Mail, MapPin, Phone } from 'lucide-react';

import ContactForm from '../contact/ContactForm';
import { LinkedInIcon } from '../layout/SocialIcons';
import { contact } from '../../data/site';
import { Container, Reveal, SectionHeading } from '../common';

const ContactSection = () => {
  const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

  return (
    <section id="contact" className="scroll-mt-[var(--nav-height)] bg-offwhite py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's start a conversation."
            subtitle="Tell us what you need and we'll connect you with the right specialist venture."
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <Reveal preset="fadeLeft">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h3 className="font-heading text-xl font-bold text-navy">
                Send us a message
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">
                Share a few details and our team will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal preset="fadeRight" delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-navy-gradient p-6 text-white shadow-[var(--shadow-card)] sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/25 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-teal/10 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                  <MapPin size={12} aria-hidden="true" />
                  UK Head Office
                </span>

                <h3 className="mt-5 font-heading text-2xl font-bold text-white">
                  Visit or call our Birmingham team.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Our head office supports employers and talent across the UK,
                  Europe, the Middle East, South East Asia and South Asia.
                </p>

                <address className="mt-7 space-y-5 text-sm not-italic text-slate-300">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-teal-light"
                    />
                    <span className="leading-relaxed">
                      {contact.address.line2}
                      <br />
                      {contact.address.line3}
                      <br />
                      {contact.address.postcode}, {contact.address.country}
                    </span>
                  </div>

                  <a
                    href={phoneHref}
                    className="flex items-center gap-3 transition-colors hover:text-white focus-ring"
                  >
                    <Phone
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-teal-light"
                    />
                    {contact.phone}
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-white focus-ring"
                  >
                    <Mail
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-teal-light"
                    />
                    {contact.email}
                  </a>
                </address>
              </div>

              <div className="relative mt-auto pt-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Group services
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-slate-200">
                    Recruitment · HR · IT · Immigration · Cyber Security
                  </p>
                </div>

                <a
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-ring"
                >
                  <LinkedInIcon size={16} />
                  Connect on LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
