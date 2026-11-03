/**
 * HeroSection — Full-bleed image hero with a solid blue overlay,
 * four-line headline and an interactive solution finder.
 */
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { Container } from '../common';
import { heroContent } from '../../data/homeContent';
import { hero } from '../../data/site';

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(heroContent.finder.options[0].id);

  const activeOption =
    heroContent.finder.options.find((option) => option.id === activeId) ||
    heroContent.finder.options[0];

  const float = (distance, duration, delay = 0) =>
    reduceMotion
      ? undefined
      : {
          y: [0, -distance, 0],
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        };

  return (
    <section className="relative isolate flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden bg-blue">
      {/* Full-bleed background image — existing asset, unchanged */}
      <img
        src={hero.image}
        alt=""
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Solid blue overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(31, 119, 192, 0.88)' }}
      />

      {/* Decorative flat circles */}
      <motion.div
        aria-hidden="true"
        animate={float(14, 9)}
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-orange sm:-right-32 sm:-top-32 sm:h-[26rem] sm:w-[26rem] lg:-right-24 lg:-top-40 lg:h-[32rem] lg:w-[32rem]"
      />
      <motion.div
        aria-hidden="true"
        animate={float(10, 11, 0.6)}
        className="pointer-events-none absolute right-[28%] top-16 hidden h-16 w-16 rounded-full bg-sky/30 sm:block lg:h-20 lg:w-20"
      />
      <motion.div
        aria-hidden="true"
        animate={float(16, 10, 0.3)}
        className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-lime sm:-bottom-20 sm:-left-20 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] left-[42%] hidden h-10 w-10 rounded-full bg-white/10 lg:block"
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white">
            {heroContent.eyebrow}
          </span>

          <h1 className="mt-5 font-heading text-[2.9rem] font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {heroContent.headline.map((line) => (
              <span
                key={line.text}
                className={`block ${
                  line.color === 'orange' ? 'text-orange' : 'text-white'
                }`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white sm:text-lg">
            {heroContent.subtext}
          </p>

          <a
            href={heroContent.cta.href}
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 font-heading text-base font-bold text-navy shadow-[0_10px_30px_rgba(245,154,31,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-dark focus-ring"
          >
            {heroContent.cta.label}
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          <div className="rounded-2xl border border-white/40 bg-white p-5 shadow-[0_30px_70px_rgba(7,28,51,0.28)] sm:p-7">
            <span className="eyebrow">{heroContent.finder.eyebrow}</span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-navy">
              {heroContent.finder.title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroContent.finder.options.map((option) => {
                const isActive = option.id === activeId;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(option.id)}
                    className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-200 focus-ring sm:text-sm ${
                      isActive
                        ? 'border-orange bg-orange text-navy shadow-sm'
                        : 'border-slate-200 bg-white text-navy hover:border-blue hover:text-blue'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeOption.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 rounded-2xl bg-orange p-5 text-navy"
              >
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-navy">
                  {heroContent.finder.recommendLabel}
                </span>
                <p className="mt-1.5 font-heading text-xl font-extrabold">
                  {activeOption.company}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-navy">
                  {activeOption.description}
                </p>
                <a
                  href={activeOption.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:decoration-navy focus-ring"
                >
                  Visit website
                  <ArrowUpRight size={15} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
