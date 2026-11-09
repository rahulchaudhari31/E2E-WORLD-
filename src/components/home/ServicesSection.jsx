/**
 * ServicesSection â€” Company tabs with an animated feature panel.
 */
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

import { Container, Reveal } from '../common';
import useAutoRotate from '../../hooks/useAutoRotate';
import { servicesSection } from '../../data/homeContent';

const ServicesSection = () => {
  const { activeIndex, select, pauseHandlers } = useAutoRotate(
    servicesSection.tabs.length,
    { interval: 1500 },
  );
  const tabRefs = useRef([]);
  const { eyebrow, heading, tabs } = servicesSection;
  const activeTab = tabs[activeIndex];

  const handleKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    select(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="bg-sky py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading.before}
            <span className="text-blue">{heading.accent}</span>
            {heading.after}
          </h2>
        </Reveal>

        <div {...pauseHandlers}>
          <Reveal delay={0.05}>
            <div
              role="tablist"
              aria-label="Company services"
              className="mx-auto mt-9 flex max-w-4xl flex-wrap items-center justify-center gap-2"
            >
            {tabs.map((tab, index) => {
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
                  onClick={() => select(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`rounded-full px-5 py-2.5 font-heading text-sm font-bold transition-all duration-200 focus-ring ${
                    isActive
                      ? 'bg-orange text-navy shadow-[0_8px_20px_rgba(245,154,31,0.28)]'
                      : 'border border-blue/20 bg-white/70 text-navy hover:border-blue hover:text-blue'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            role="tabpanel"
            id={`services-panel-${activeTab.id}`}
            aria-labelledby={`services-tab-${activeTab.id}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 max-w-5xl rounded-2xl border border-blue/10 border-t-[6px] border-t-orange bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
              <div>
                <h3 className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {activeTab.company}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {activeTab.description}
                </p>
                <a
                  href={activeTab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 font-heading text-sm font-bold text-navy shadow-[0_8px_20px_rgba(245,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-dark focus-ring"
                >
                  Visit website
                  <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {activeTab.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-navy transition-colors hover:border-blue/40 hover:bg-sky/60"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-navy">
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
