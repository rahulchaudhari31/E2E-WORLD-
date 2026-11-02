/**
 * VenturesSection — Interactive cards for the four group ventures.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Monitor,
  Shield,
  Users,
} from 'lucide-react';

import {
  Badge,
  Container,
  ImageWithFallback,
  Reveal,
  SectionHeading,
} from '../common';
import ventures from '../../data/ventures';

const iconMap = { Users, Monitor, Globe, Shield };

const VenturesSection = () => {
  return (
    <section
      id="ventures"
      aria-label="Our ventures"
      className="scroll-mt-[var(--nav-height)] bg-offwhite py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Companies"
            title="Four specialist ventures. One connected group."
            subtitle="Purpose-built businesses covering recruitment and HR, technical hiring, immigration advisory, and cyber security with digital growth."
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {ventures.map((venture, index) => {
            const Icon = iconMap[venture.icon] || Globe;

            return (
              <Reveal key={venture.slug} preset="fadeUp" delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-slate-100 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={venture.image}
                      alt={`${venture.name} — ${venture.tagline}`}
                      className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div>
                        <span
                          className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/20 backdrop-blur"
                          style={{ backgroundColor: `${venture.color}e6` }}
                        >
                          <Icon size={21} aria-hidden="true" />
                        </span>
                        <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                          {venture.name}
                        </h3>
                      </div>
                      <span className="font-heading text-xs font-bold tracking-widest text-white/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-sm font-semibold text-accent">
                      {venture.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {venture.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {venture.regions.map((region) => (
                        <Badge key={region} color={venture.color}>
                          {region}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                      <Link
                        to={`/ventures/${venture.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-lg font-heading text-sm font-semibold text-navy transition-colors hover:text-accent focus-ring"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <a
                        href={venture.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-slate-500 transition-colors hover:text-accent focus-ring"
                      >
                        Visit Website
                        <ExternalLink size={14} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default VenturesSection;
