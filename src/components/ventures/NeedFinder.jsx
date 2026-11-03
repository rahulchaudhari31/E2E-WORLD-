import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Badge, Button, Container, SectionHeading } from '../common';
import ventures from '../../data/ventures';
import { getVentureIcon } from './ventureIcons';

const needs = [
  {
    id: 'hire',
    label: 'I need to hire staff',
    slug: 'e2e-hrc',
    icon: 'Users',
  },
  {
    id: 'it',
    label: 'I need IT talent',
    slug: 'e2e-infosys',
    icon: 'Monitor',
  },
  {
    id: 'visa',
    label: 'I need a visa or sponsorship licence',
    slug: 'elite-pic',
    icon: 'Globe',
  },
  {
    id: 'cyber',
    label: 'I need cybersecurity or web services',
    slug: 'e2e-cyber-solutions',
    icon: 'Shield',
  },
];

const NeedFinder = () => {
  const [selectedId, setSelectedId] = useState(needs[0].id);
  const selectedNeed = needs.find((need) => need.id === selectedId) || needs[0];
  const recommended =
    ventures.find((venture) => venture.slug === selectedNeed.slug) || ventures[0];
  const RecommendedIcon = getVentureIcon(recommended.icon);

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(20,184,166,0.16),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Find Your Fit"
          title="Find the right division"
          subtitle="Pick the need that sounds most like yours and we will point you to the right specialist team."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-3 sm:grid-cols-2">
            {needs.map((need) => {
              const Icon = getVentureIcon(need.icon);
              const venture = ventures.find((item) => item.slug === need.slug);
              const isActive = need.id === selectedNeed.id;

              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => setSelectedId(need.id)}
                  aria-pressed={isActive}
                  className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 focus-ring ${
                    isActive
                      ? 'border-transparent text-white shadow-lg'
                      : 'border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]'
                  }`}
                  style={
                    isActive && venture
                      ? {
                          backgroundColor: `${venture.color}26`,
                          borderColor: venture.color,
                        }
                      : undefined
                  }
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'bg-white/10 text-teal-light'
                    }`}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold leading-snug">
                      {need.label}
                    </span>
                    <span
                      className={`mt-1 block text-xs ${
                        isActive ? 'text-white/90' : 'text-slate-500'
                      }`}
                    >
                      Recommended: {venture?.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={recommended.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${recommended.color}15`,
                      color: recommended.color,
                    }}
                  >
                    <RecommendedIcon size={23} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Recommended venture
                    </p>
                    <h3 className="mt-1 text-xl font-bold font-heading text-navy">
                      {recommended.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 font-semibold" style={{ color: recommended.color }}>
                  {recommended.tagline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {recommended.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {recommended.services.slice(0, 3).map((service) => (
                    <Badge key={service} color={recommended.color}>
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {recommended.regions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500"
                    >
                      {region}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    to={`/ventures/${recommended.slug}`}
                    size="sm"
                    iconRight={ArrowRight}
                  >
                    View Details
                  </Button>
                  <Button
                    href={recommended.externalUrl}
                    variant="outline"
                    size="sm"
                    iconRight={ExternalLink}
                    aria-label={`Visit ${recommended.name} website (opens in a new tab)`}
                  >
                    Visit Website
                  </Button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NeedFinder;
