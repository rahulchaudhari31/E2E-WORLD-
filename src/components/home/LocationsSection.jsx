/**
 * LocationsSection — Stylised world map with region pins and the UK head office.
 */
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, Mail, MapPin, Phone } from 'lucide-react';

import images from '../../data/images';
import { contact } from '../../data/site';
import { locations } from '../../data/home';
import {
  Button,
  Container,
  ImageWithFallback,
  Reveal,
  SectionHeading,
} from '../common';

const WorldMap = () => {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-dark">
      <svg
        viewBox="0 0 1000 520"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id="map-glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#071428" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="map-land" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="100%" stopColor="#132D54" />
          </linearGradient>
          <pattern id="map-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="1000" height="520" fill="url(#map-glow)" />
        <rect width="1000" height="520" fill="url(#map-grid)" />

        <g
          fill="url(#map-land)"
          stroke="rgba(148,163,184,0.28)"
          strokeWidth="1.2"
        >
          <path d="M95 155C110 105 160 80 215 88c40 4 70 24 95 52 15 15 8 35-10 45-20 10-40 8-55 23-15 16-35 22-55 12-25-12-45-15-65-28-20-14-35-24-30-37Z" />
          <path d="M255 250c30-12 60 0 67 28 6 24-7 42-14 62-8 24-20 50-36 57-17 7-29-9-32-31-6-28-2-60 5-88Z" />
          <path d="M470 130c20-18 55-22 78-8 14 8 22 24 14 38-7 14-24 18-42 20-20 3-38-4-46-18-8-12-10-23-4-32Z" />
          <path d="M462 118c6-6 14-2 12 6-2 6-8 8-12 4Z" />
          <path d="M492 204c38-16 83-8 104 18 16 20 10 46 0 70-12 26-28 56-51 64-23 8-40-10-47-34-10-26-18-54-16-80 1-16 4-30 10-38Z" />
          <path d="M575 135c35-30 90-37 140-25 50 12 90 38 118 68 19 20 15 40-6 50-24 10-45 2-67 12-25 11-50 8-70-4-20-12-40-4-60-16-20-12-37-22-47-38-11-16-17-33-8-47Z" />
          <path d="M735 272c15-8 31-2 35 10 4 10-8 16-20 12-10-4-20-12-15-22Z" />
          <path d="M790 298c10-6 22-2 25 8 3 8-7 14-16 10-8-4-15-12-9-18Z" />
          <path d="M800 330c30-18 70-14 85 10 13 20-5 46-33 52-27 6-54-10-62-32-5-12 0-22 10-30Z" />
          <path d="M884 392c8-4 16 0 17 8 1 7-7 12-14 9-7-3-10-13-3-17Z" />
        </g>

        <path
          d="M480 150c40 40 80 60 130 82 40 16 80 20 150 53"
          fill="none"
          stroke="rgba(45,212,191,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M480 150c20 46 28 92 70 130 20 18 52 30 88 40"
          fill="none"
          stroke="rgba(37,99,235,0.25)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>

      {locations.map((location, index) => (
        <motion.div
          key={location.name}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: location.left, top: location.top }}
        >
          <span className="relative flex h-3.5 w-3.5">
            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 2.6], opacity: [0.55, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.25,
                ease: 'easeOut',
              }}
              className="absolute inline-flex h-full w-full rounded-full bg-teal"
            />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-teal shadow-[0_0_0_4px_rgba(20,184,166,0.18)]" />
          </span>

          <span
            className={`absolute left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-dark/85 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur sm:block ${
              location.label === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            }`}
          >
            {location.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const LocationsSection = () => {
  const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

  return (
    <section aria-label="Our locations" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Global Presence"
            title="Local roots. Worldwide reach."
            subtitle="From our UK Head Office in Birmingham, the group supports businesses and talent across five global regions."
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:gap-10">
          <Reveal preset="fadeLeft">
            <div className="rounded-3xl border border-slate-100 bg-navy p-4 shadow-[var(--shadow-card)] sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Globe2 size={17} className="text-teal-light" aria-hidden="true" />
                  Our global footprint
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {locations.length} regions
                </span>
              </div>

              <WorldMap />

              <div className="mt-4 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                    {location.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal preset="fadeRight" delay={0.1}>
            <div className="h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[var(--shadow-card)]">
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={images.office}
                  alt="e2e World Group UK Head Office"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  UK Head Office
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-navy">
                  Birmingham, United Kingdom
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Our central base for group operations, recruitment, HR,
                  immigration advisory and technology services.
                </p>

                <address className="mt-6 space-y-4 text-sm not-italic text-slate-600">
                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-accent"
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
                    className="flex items-center gap-3 transition-colors hover:text-accent focus-ring"
                  >
                    <Phone size={18} aria-hidden="true" className="shrink-0 text-accent" />
                    {contact.phone}
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-accent focus-ring"
                  >
                    <Mail size={18} aria-hidden="true" className="shrink-0 text-accent" />
                    {contact.email}
                  </a>
                </address>

                <Button to="/contact" variant="primary" className="mt-7 w-full" iconRight={ArrowRight}>
                  Get in Touch
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default LocationsSection;
