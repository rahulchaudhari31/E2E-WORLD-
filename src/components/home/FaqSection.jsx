/**
 * FaqSection — Accessible accordion with an orange rotating plus icon.
 */
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import { Container, Reveal } from '../common';
import { faqSection } from '../../data/homeContent';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { eyebrow, heading, items } = faqSection;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading.before}
            <span className="text-blue">{heading.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl">
          <div className="space-y-3">
            {items.map((item, index) => {
              const isOpen = index === openIndex;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? 'border-orange/50 bg-cream/40'
                      : 'border-slate-200 bg-white hover:border-blue/30'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold text-navy focus-ring sm:px-6 sm:py-5 sm:text-lg"
                    >
                      {item.question}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-navy"
                        aria-hidden="true"
                      >
                        <Plus size={18} strokeWidth={2.5} />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={panelId}
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default FaqSection;
