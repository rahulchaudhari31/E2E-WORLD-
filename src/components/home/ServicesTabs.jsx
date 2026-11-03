/**
 * ServicesTabs — Accessible tabbed view across the group's service areas.
 */
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  Check,
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
import { serviceTabs } from '../../data/home';

const iconMap = { Users, Monitor, Globe, Shield };

const ServicesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  const activeTab = serviceTabs[activeIndex];
  const venture =
    ventures.find((item) => item.slug === activeTab.slug) || ventures[0];
  const ActiveIcon = iconMap[activeTab.icon] || Users;

  const handleKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % serviceTabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + serviceTabs.length) % serviceTabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = serviceTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      aria-label="Our services"
      className="bg-offwhite py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Specialist services, connected end to end."
            subtitle="Explore the capabilities delivered by each e2e World Group venture."
            className="mb-10 md:mb-12"
          />
        </Reveal>

        <Reveal preset="fadeUp" delay={0.05}>
          <LayoutGroup id="services-tabs">
            <div
              role="tablist"
              aria-label="Service areas"
              className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-[var(--shadow-card)]"
            >
              {serviceTabs.map((tab, index) => {
                const Icon = iconMap[tab.icon] || Users;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={tab.id}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`services-tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`services-panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`relative flex min-w-[10.5rem] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 font-heading text-sm font-semibold transition-colors duration-200 focus-ring ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="service-tab-pill"
                        className="absolute inset-0 rounded-xl bg-navy shadow-[0_8px_20px_rgba(11,31,58,0.2)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon
                        size={16}
                        aria-hidden="true"
                        className={isActive ? 'text-teal-light' : 'text-slate-400'}
                      />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            role="tabpanel"
            id={`services-panel-${activeTab.id}`}
            aria-labelledby={`services-tab-${activeTab.id}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[var(--shadow-card)]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: venture.color }}
                  >
                    <ActiveIcon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <Badge color={venture.color}>{activeTab.label}</Badge>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {venture.name}
                    </p>
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold text-navy md:text-3xl">
                  {venture.tagline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {venture.longDescription}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {venture.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${venture.color}15`,
                          color: venture.color,
                        }}
                      >
                        <Check size={12} aria-hidden="true" />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/ventures/${venture.slug}`}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-button)] bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-ring"
                  >
                    Explore {venture.name}
                  </Link>

                  <a
                    href={venture.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-accent focus-ring"
                  >
                    Visit Website
                    <ExternalLink size={14} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full">
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={venture.image}
                    alt={`${venture.name} services`}
                    className="h-full w-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
                    Regions served
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {venture.regions.map((region) => (
                      <span
                        key={region}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default ServicesTabs;
