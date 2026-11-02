import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FaqAccordion = ({ items, color = '#2563EB' }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[var(--shadow-card)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-faq-button-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50/70 focus-ring sm:px-6"
              >
                <span className="font-heading text-base font-semibold text-navy sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? 'text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                  style={isOpen ? { backgroundColor: color } : undefined}
                >
                  <ChevronDown
                    size={17}
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
