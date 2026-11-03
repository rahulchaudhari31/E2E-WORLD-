/**
 * JourneySection — Four-step client journey with an animated orange detail card.
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container, Reveal } from '../common';
import { journeySection } from '../../data/homeContent';

const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { eyebrow, heading, subtext, steps } = journeySection;
  const activeStep = steps[activeIndex];

  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading.before}
            <span className="text-blue">{heading.accent}</span>
            {heading.after}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {subtext}
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={step.number}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2.5 font-heading text-sm font-bold transition-all duration-200 focus-ring sm:px-5 ${
                  isActive
                    ? 'bg-navy text-white shadow-[0_8px_20px_rgba(11,42,74,0.2)]'
                    : 'border border-navy/15 bg-white text-navy hover:border-navy/40'
                }`}
              >
                {step.number} &middot; {step.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-orange p-7 text-navy shadow-[0_24px_60px_rgba(245,154,31,0.28)] sm:p-10 lg:p-12"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-2 select-none font-heading text-[9rem] font-extrabold leading-none text-navy/10 sm:-bottom-16 sm:right-6 sm:text-[13rem] lg:text-[17rem]"
            >
              {activeStep.number}
            </span>

            <div className="relative max-w-2xl">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-navy">
                {activeStep.companies}
              </span>
              <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                {activeStep.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy sm:text-base">
                {activeStep.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default JourneySection;
