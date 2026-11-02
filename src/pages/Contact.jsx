import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container, PageHero, Reveal, Seo } from '../components/common';
import ContactForm from '../components/contact/ContactForm';
import { FacebookIcon, LinkedInIcon } from '../components/layout/SocialIcons';
import { contact } from '../data/site';
import images from '../data/images';

const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact e2e World Group in Birmingham for recruitment, HR, IT, immigration, cyber security and digital support. Call, email or send an enquiry."
        path="/contact"
      />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="Tell us about your recruitment, HR, IT, immigration or digital needs. Our team will connect you with the right specialist."
          image={images.skyline}
          breadcrumb={[
            { label: 'Home', to: '/' },
            { label: 'Contact Us' },
          ]}
        />

        <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <Reveal preset="fadeRight">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Send a message
                </span>
                <h2 className="mt-2 text-2xl font-bold font-heading text-navy sm:text-3xl">
                  How can we help?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Complete the form and the right team will get back to you.
                </p>

                <div className="mt-6">
                  <ContactForm variant="full" />
                </div>
              </div>
            </Reveal>

            <Reveal preset="fadeLeft" delay={0.1}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold font-heading text-navy">
                    UK Head Office
                  </h3>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-slate-500">
                    {contact.address.line2}
                    <br />
                    {contact.address.line3}
                    <br />
                    {contact.address.postcode}
                    <br />
                    {contact.address.country}
                  </address>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={phoneHref}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                      <Phone size={21} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold font-heading text-navy">
                      Call us
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{contact.phone}</p>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Mail size={21} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold font-heading text-navy">
                      Email us
                    </h3>
                    <p className="mt-1 break-all text-sm text-slate-500">
                      {contact.email}
                    </p>
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Clock size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold font-heading text-navy">
                    Working hours
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    {contact.hours.days}
                  </p>
                  <p className="text-sm text-slate-500">{contact.hours.time}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {contact.hours.note}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-[var(--shadow-card)]">
                  <div
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/20 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <h3 className="text-lg font-bold font-heading">Follow us</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Stay connected with e2e World Group.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href={contact.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="e2e World Group on LinkedIn (opens in a new tab)"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal hover:text-navy focus-ring"
                      >
                        <LinkedInIcon size={18} />
                      </a>
                      <a
                        href={contact.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="e2e World Group on Facebook (opens in a new tab)"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal hover:text-navy focus-ring"
                      >
                        <FacebookIcon size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Reveal preset="scaleUp">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <h2 className="text-xl font-bold font-heading text-navy sm:text-2xl">
                Find us in Birmingham
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-[var(--shadow-card)]">
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
