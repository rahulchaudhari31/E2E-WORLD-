import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  Badge,
  Button,
  Container,
  PageHero,
  Reveal,
  SectionHeading,
  Seo,
} from '../components/common';
import FaqAccordion from '../components/ventures/FaqAccordion';
import OtherVentures from '../components/ventures/OtherVentures';
import { getVentureIcon } from '../components/ventures/ventureIcons';
import { getServiceIcon } from '../components/ventures/serviceIcons';
import { getVentureFaqs } from '../utils/ventureFaqs';
import ventures from '../data/ventures';
import NotFound from './NotFound';

const VentureDetail = () => {
  const { slug } = useParams();
  const venture = ventures.find((item) => item.slug === slug);

  if (!venture) {
    return <NotFound />;
  }

  const Icon = getVentureIcon(venture.icon);
  const faqs = getVentureFaqs(venture);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title={`${venture.name} — ${venture.tagline}`}
        description={venture.shortDescription}
        path={`/ventures/${venture.slug}`}
        image={venture.image}
        jsonLd={faqSchema}
      />
      <main>
        <PageHero
          eyebrow={venture.tagline}
          title={venture.name}
          subtitle={venture.shortDescription}
          image={venture.image}
          themeColor={venture.color}
          breadcrumb={[
            { label: 'Home', to: '/' },
            { label: 'Our Companies', to: '/ventures' },
            { label: venture.name },
          ]}
        />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
            <Reveal preset="fadeRight">
              <div>
                <span
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: venture.color }}
                >
                  Overview
                </span>
                <h2 className="mt-3 text-3xl font-bold font-heading text-navy sm:text-4xl">
                  About {venture.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {venture.longDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {venture.services.slice(0, 4).map((service) => (
                    <Badge key={service} color={venture.color}>
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal preset="fadeLeft" delay={0.1}>
              <aside className="relative overflow-hidden rounded-3xl border border-slate-100 bg-offwhite p-6 shadow-[var(--shadow-card)] sm:p-7">
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                  style={{ backgroundColor: `${venture.color}1f` }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${venture.color}15`,
                      color: venture.color,
                    }}
                  >
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold font-heading text-navy">
                    {venture.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {venture.tagline}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Regions covered
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {venture.regions.map((region) => (
                        <Badge key={region} color={venture.color}>
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    href={venture.externalUrl}
                    variant="primary"
                    size="md"
                    iconRight={ExternalLink}
                    className="mt-6 w-full"
                    aria-label={`Visit ${venture.name} official website (opens in a new tab)`}
                  >
                    Visit official website
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Services built around your needs"
            subtitle={`Specialist support from the ${venture.name} team, tailored to your organisation.`}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {venture.services.map((service, index) => {
              const ServiceIcon = getServiceIcon(service);

              return (
                <Reveal
                  key={service}
                  preset="fadeUp"
                  delay={index * 0.05}
                  className="h-full"
                >
                  <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${venture.color}15`,
                        color: venture.color,
                      }}
                    >
                      <ServiceIcon size={23} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold font-heading text-navy">
                      {service}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      Talk to our team about how this service can support your
                      business goals.
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {(venture.sectors ||
        venture.process ||
        venture.audiences ||
        venture.whyChoose ||
        venture.regulation ||
        venture.contactInfo) && (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            {venture.sectors && (
              <div className="mx-auto max-w-4xl text-center">
                <span
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{ color: venture.color }}
                >
                  Sectors we serve
                </span>
                <h2 className="mt-3 text-3xl font-bold font-heading text-navy sm:text-4xl">
                  Where we work
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {venture.name} supports clients across a broad range of
                  sectors, including:
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                  {venture.sectors.map((sector) => (
                    <Badge key={sector} color={venture.color}>
                      {sector}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {venture.process && (
              <div className={venture.sectors ? 'mt-16 sm:mt-20' : ''}>
                <SectionHeading
                  eyebrow="How It Works"
                  title="Our process"
                  subtitle={`How ${venture.name} works with you, step by step.`}
                />
                <div
                  className={`grid gap-5 sm:grid-cols-2 ${
                    venture.process.length >= 5
                      ? 'lg:grid-cols-5'
                      : 'lg:grid-cols-4'
                  }`}
                >
                  {venture.process.map((step, index) => (
                    <Reveal
                      key={step.title}
                      preset="fadeUp"
                      delay={index * 0.05}
                      className="h-full"
                    >
                      <article className="h-full rounded-2xl border border-slate-100 bg-offwhite p-6">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold font-heading"
                          style={{
                            backgroundColor: `${venture.color}15`,
                            color: venture.color,
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-4 text-lg font-bold font-heading text-navy">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                          {step.description}
                        </p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {(venture.audiences ||
              venture.whyChoose ||
              venture.regulation ||
              venture.contactInfo) && (
              <div
                className={
                  venture.sectors || venture.process ? 'mt-16 sm:mt-20' : ''
                }
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {venture.audiences?.map((audience) => (
                    <Reveal key={audience.title} preset="fadeUp" className="h-full">
                      <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-offwhite p-6 sm:p-8">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.18em]"
                          style={{ color: venture.color }}
                        >
                          {audience.label}
                        </span>
                        <h3 className="mt-3 text-2xl font-bold font-heading text-navy">
                          {audience.title}
                        </h3>
                        <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">
                          {audience.description}
                        </p>
                        {audience.cta && (
                          <Button
                            to={audience.cta.to}
                            variant="ghost"
                            size="sm"
                            className="mt-5 self-start"
                          >
                            {audience.cta.label}
                          </Button>
                        )}
                      </article>
                    </Reveal>
                  ))}

                  {venture.whyChoose && (
                    <Reveal preset="fadeUp" className="h-full">
                      <article className="h-full rounded-2xl border border-slate-100 bg-offwhite p-6 sm:p-8">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.18em]"
                          style={{ color: venture.color }}
                        >
                          Why choose us
                        </span>
                        <h3 className="mt-3 text-2xl font-bold font-heading text-navy">
                          What sets us apart
                        </h3>
                        <ul className="mt-5 space-y-3">
                          {venture.whyChoose.map((point) => (
                            <li key={point} className="flex gap-3">
                              <Check
                                size={18}
                                className="mt-0.5 shrink-0"
                                style={{ color: venture.color }}
                                aria-hidden="true"
                              />
                              <span className="text-sm leading-relaxed text-slate-600">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  )}

                  {venture.regulation && (
                    <Reveal preset="fadeUp" className="h-full">
                      <article className="h-full rounded-2xl border border-slate-100 bg-offwhite p-6 sm:p-8">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.18em]"
                          style={{ color: venture.color }}
                        >
                          Regulation
                        </span>
                        <h3 className="mt-3 text-2xl font-bold font-heading text-navy">
                          Approved advice
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-slate-600">
                          {venture.regulation}
                        </p>
                      </article>
                    </Reveal>
                  )}

                  {venture.contactInfo && (
                    <Reveal preset="fadeUp" className="h-full">
                      <article className="h-full rounded-2xl border border-slate-100 bg-offwhite p-6 sm:p-8">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.18em]"
                          style={{ color: venture.color }}
                        >
                          Contact details
                        </span>
                        <h3 className="mt-3 text-2xl font-bold font-heading text-navy">
                          Get in touch directly
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-600">
                          {venture.contactInfo.address && (
                            <li className="flex gap-3">
                              <MapPin
                                size={17}
                                className="mt-0.5 shrink-0"
                                style={{ color: venture.color }}
                                aria-hidden="true"
                              />
                              <span>{venture.contactInfo.address}</span>
                            </li>
                          )}
                          {venture.contactInfo.phone && (
                            <li className="flex gap-3">
                              <Phone
                                size={17}
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
                            <li className="flex gap-3">
                              <Mail
                                size={17}
                                className="mt-0.5 shrink-0"
                                style={{ color: venture.color }}
                                aria-hidden="true"
                              />
                              <a
                                href={`mailto:${venture.contactInfo.email}`}
                                className="hover:underline"
                              >
                                {venture.contactInfo.email}
                              </a>
                            </li>
                          )}
                          {venture.contactInfo.hours && (
                            <li className="flex gap-3">
                              <Clock
                                size={17}
                                className="mt-0.5 shrink-0"
                                style={{ color: venture.color }}
                                aria-hidden="true"
                              />
                              <span>{venture.contactInfo.hours}</span>
                            </li>
                          )}
                        </ul>
                        {venture.externalUrl && (
                          <Button
                            href={venture.externalUrl}
                            variant="ghost"
                            size="sm"
                            iconRight={ExternalLink}
                            className="mt-5"
                          >
                            Visit official website
                          </Button>
                        )}
                      </article>
                    </Reveal>
                  )}
                </div>
              </div>
            )}
          </Container>
        </section>
      )}

      <section className="relative overflow-hidden bg-navy py-14 sm:py-16">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.14),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="Where We Work"
            title="Regions covered"
            subtitle={`${venture.name} supports clients and talent across the following regions.`}
          />

          <div className="flex flex-wrap justify-center gap-3">
            {venture.regions.map((region, index) => (
              <motion.span
                key={region}
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white backdrop-blur"
              >
                <MapPin
                  size={15}
                  aria-hidden="true"
                  style={{ color: venture.color }}
                />
                {region}
              </motion.span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions, answered"
              subtitle={`A few common questions about working with ${venture.name}.`}
            />

            <Reveal preset="fadeUp">
              <FaqAccordion items={faqs} color={venture.color} />
            </Reveal>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-offwhite p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-heading font-semibold text-navy">
                  Ready to speak with {venture.name}?
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Visit the official website or contact the group team.
                </p>
              </div>
              <Button
                href={venture.externalUrl}
                variant="primary"
                iconRight={ExternalLink}
                className="shrink-0"
                aria-label={`Visit ${venture.name} official website (opens in a new tab)`}
              >
                Visit official website
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <OtherVentures currentSlug={venture.slug} />
      </main>
    </>
  );
};

export default VentureDetail;
