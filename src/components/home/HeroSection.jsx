/**
 * HeroSection — Full-screen hero with typed specialties and floating glass cards.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

import { Button, Container } from '../common';
import { company, hero } from '../../data/site';
import { heroHighlights, rotatingWords } from '../../data/home';

const iconMap = { Users, Globe2, ShieldCheck };

const TYPE_SPEED = 75;
const DELETE_SPEED = 40;
const PAUSE = 1500;

const useTypewriter = (enabled = true) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    const word = rotatingWords[wordIndex];

    if (!deleting && subIndex === word.length) {
      const timeout = window.setTimeout(() => setDeleting(true), PAUSE);
      return () => window.clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      const timeout = window.setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % rotatingWords.length);
      }, DELETE_SPEED);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(
      () => setSubIndex((index) => index + (deleting ? -1 : 1)),
      deleting ? DELETE_SPEED : TYPE_SPEED,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, enabled, subIndex, wordIndex]);

  return enabled
    ? rotatingWords[wordIndex].substring(0, subIndex)
    : rotatingWords[0];
};

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(!reduceMotion);

  const scrollToVentures = () => {
    document.getElementById('ventures')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-var(--nav-height))] items-center overflow-hidden bg-navy">
      {/* Background image + overlays */}
      <img
        src={hero.image}
        alt=""
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-navy/40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 22%, rgba(20,184,166,0.22), transparent 42%), radial-gradient(circle at 10% 85%, rgba(37,99,235,0.28), transparent 38%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container className="relative z-10 grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles size={15} className="shrink-0 text-teal-light" aria-hidden="true" />
            <span className="sr-only">
              Experts in Recruitment, IT Consulting, Immigration and Cyber Security.
            </span>
            <span aria-hidden="true" className="text-sm text-slate-200">
              Experts in{' '}
              <span className="inline-block min-w-[8.5rem] font-heading font-semibold text-white">
                {typed}
                <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-teal-light" />
              </span>
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Comprehensive{' '}
            <span className="text-teal-light">talent &amp; management</span>{' '}
            solutions for a connected world.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {company.mission}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="button"
              onClick={scrollToVentures}
              size="lg"
              variant="primary"
              iconRight={ArrowRight}
            >
              Explore Our Ventures
            </Button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border border-white/25 bg-white/5 px-8 py-4 font-heading text-lg font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-white/50 hover:bg-white/10 focus-ring"
            >
              Get in Touch
            </Link>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Since 2007 <span className="mx-2 text-teal">•</span> 4 specialist
            ventures <span className="mx-2 text-teal">•</span> 5 global regions
          </p>
        </motion.div>

        {/* Floating glass cards */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-teal/20"
          />

          <div className="relative space-y-4">
            {heroHighlights.map((item, index) => {
              const Icon = iconMap[item.icon] || Globe2;
              return (
                <motion.div
                  key={item.title}
                  animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  className={`glass rounded-2xl p-5 shadow-2xl ${
                    index === 1 ? 'ml-10' : index === 2 ? 'ml-4' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light ring-1 ring-white/15">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        aria-label="Scroll to trust highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white focus-ring sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
        >
          <ChevronDown size={14} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
