import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { Container, PageHero, Reveal, Seo } from '../components/common';
import ContactForm from '../components/contact/ContactForm';
import { LinkedInIcon } from '../components/layout/SocialIcons';
import { contact } from '../data/site';
import { contactSection } from '../data/homeContent';
import ventures from '../data/ventures';

const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact e2e World Group in Birmingham for recruitment, HR, IT, immigration, digital marketing and cybersecurity support. Call, email or send an enquiry."
        path="/contact"
      />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's start something great."
          subtitle={contactSection.subtext}
          breadcrumb={[
            { label: 'Home', to: '/' },
            { label: 'Contact' },
          ]}
        />

        <section className="bg-mint py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <Reveal preset="fadeRight">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
                      <MapPin size={21} aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 font-heading text-lg font-extrabold text-navy">
                      UK Head Office
                    </h2>
                    <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
                      {contact.address.full}
                    </address>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href={phoneHref}
                      className="group rounded-2xl border border-white/60 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/15 text-orange-dark transition-colors group-hover:bg-orange group-hover:text-navy">
                        <Phone size={21} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading text-sm font-extrabold text-navy">
                        Call us
                      </h3>
                      <p className="mt-1 text-sm text-muted">{contact.phone}</p>
                    </a>

                    <a
                      href={`mailto:${contact.email}`}
                      className="group rounded-2xl border border-white/60 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                        <Mail size={21} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading text-sm font-extrabold text-navy">
                        Email us
                      </h3>
                      <p className="mt-1 break-all text-sm text-muted">
                        {contact.email}
                      </p>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-[var(--shadow-card)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime/60 text-navy">
                      <Clock size={21} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-extrabold text-navy">
                      Working hours
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-navy">
                      {contact.hours.days}
                    </p>
                    <p className="text-sm text-muted">{contact.hours.time}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {contact.hours.note}
                    </p>
                  </div>

                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-ring"
                  >
                    <LinkedInIcon size={16} />
                    Connect on LinkedIn
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </Reveal>

              <Reveal preset="fadeLeft" delay={0.1}>
                <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-[0_24px_60px_rgba(11,42,74,0.12)] sm:p-8">
                  <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    Complete the form and the right team will get back to you.
                  </p>
                  <div className="mt-6">
                    <ContactForm variant="full" />
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Company contacts</span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Contact the companies directly
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                Prefer to go straight to a specialist team? Reach each of our
                companies below, or use the form above and we will route you to
                the right people.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {ventures.map((venture) => (
                <Reveal key={venture.slug} preset="fadeUp" className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
                    <h3 className="font-heading text-xl font-extrabold tracking-tight text-navy">
                      {venture.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {venture.tagline}
                    </p>

                    {venture.contactInfo && (
                      <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                        {venture.contactInfo.phone && (
                          <li className="flex items-start gap-2.5">
                            <Phone
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: venture.color }}
                              aria-hidden="true"
                            />
                            <a
                              href={`tel:${venture.contactInfo.phone.replace(
                                /\s/g,
                                ''
                              )}`}
                              className="hover:underline"
                            >
                              {venture.contactInfo.phone}
                            </a>
                          </li>
                        )}
                        {venture.contactInfo.email && (
                          <li className="flex items-start gap-2.5">
                            <Mail
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: venture.color }}
                              aria-hidden="true"
                            />
                            <a
                              href={`mailto:${venture.contactInfo.email}`}
                              className="break-all hover:underline"
                            >
                              {venture.contactInfo.email}
                            </a>
                          </li>
                        )}
                        {venture.contactInfo.address && (
                          <li className="flex items-start gap-2.5">
                            <MapPin
                              size={16}
                              className="mt-0.5 shrink-0"
                              style={{ color: venture.color }}
                              aria-hidden="true"
                            />
                            <span>{venture.contactInfo.address}</span>
                          </li>
                        )}
                      </ul>
                    )}

                    <a
                      href={venture.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-bold transition-opacity hover:opacity-80 focus-ring"
                      style={{ color: venture.color }}
                    >
                      Visit {venture.name}
                      <ExternalLink size={15} aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <Container>
            <Reveal preset="scaleUp">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-blue">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <h2 className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
                  Find us in Birmingham
                </h2>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[var(--shadow-card)]">
                <iframe
                  title="e2e World Group UK Head Office location"
                  src={contact.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[360px] w-full border-0 sm:h-[420px]"
                />
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Contact;
