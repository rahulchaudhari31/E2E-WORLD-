/**
 * Footer — Navy footer with group, company and connect columns.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

import { Container } from '../common';
import Logo from './Logo';
import { footerContent } from '../../data/homeContent';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="relative overflow-hidden bg-navy text-slate-300">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-orange/10 blur-3xl"
        />

        <Container className="relative py-14 md:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="inline-flex rounded-2xl bg-white p-3 shadow-lg">
                <Logo />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
                {footerContent.tagline}
              </p>
            </div>

            <nav aria-label="Group links">
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">
                Group
              </h2>
              <ul className="mt-4 space-y-1 text-sm">
                {footerContent.groupLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="inline-flex min-h-10 items-center text-slate-400 transition-colors hover:text-orange focus-ring"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company links">
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">
                Companies
              </h2>
              <ul className="mt-4 space-y-1 text-sm">
                {footerContent.companyLinks.map((item) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-10 items-center gap-1.5 text-slate-400 transition-colors hover:text-orange focus-ring"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="opacity-50 transition-opacity group-hover:opacity-100"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Connect links">
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">
                Connect
              </h2>
              <ul className="mt-4 space-y-1 text-sm">
                {footerContent.connectLinks.map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 text-slate-400 transition-colors hover:text-orange focus-ring"
                      >
                        {item.label}
                        <ArrowUpRight size={13} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="inline-flex min-h-10 items-center text-slate-400 transition-colors hover:text-orange focus-ring"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>
        </Container>

        <div className="relative border-t border-white/10">
          <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
            <p>
              &copy; {year} e2e World Group. All rights reserved.
            </p>
            <p className="text-slate-400">
              Talent and management solutions for a connected world.
            </p>
          </Container>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange text-navy shadow-[0_8px_30px_rgba(245,154,31,0.45)] transition-colors hover:bg-orange-dark focus-ring sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
