/**
 * Navbar — White sticky navigation with a centred link group,
 * an "Our Companies" dropdown and an orange pill CTA.
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

import { Button, Container } from '../common';
import Logo from './Logo';
import {
  companiesSection,
  navigationContent,
} from '../../data/homeContent';

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCompaniesOpen, setMobileCompaniesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const companies = companiesSection.companies;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Reset navigation state after a route change.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = originalOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) setMobileOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const isActive = (item) => {
    if (item.exact) return pathname === item.to;
    return pathname === item.to || pathname.startsWith(`${item.to}/`);
  };

  const companiesActive =
    pathname === '/ventures' || pathname.startsWith('/ventures/');

  const handleDrawerKeyDown = (event) => {
    if (event.key !== 'Tab') return;

    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const linkBase =
    'relative inline-flex min-h-11 items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors duration-200 focus-ring';

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled
            ? 'border-slate-200 shadow-[0_10px_30px_rgba(11,42,74,0.08)]'
            : 'border-transparent shadow-none'
        }`}
      >
        <Container className="grid h-[var(--nav-height)] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigationContent.links.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.to}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        to={item.to}
                        aria-current={companiesActive ? 'page' : undefined}
                        className={`${linkBase} pr-2 ${
                          companiesActive
                            ? 'text-blue'
                            : 'text-navy hover:text-blue'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={dropdownOpen}
                        aria-controls="companies-menu"
                        aria-label="Toggle companies menu"
                        onClick={() => setDropdownOpen((open) => !open)}
                        onKeyDown={(event) => {
                          if (event.key === 'ArrowDown') {
                            event.preventDefault();
                            setDropdownOpen(true);
                          }
                        }}
                        className={`inline-flex h-11 w-8 items-center justify-center rounded-full transition-colors focus-ring ${
                          companiesActive
                            ? 'text-blue'
                            : 'text-navy hover:text-blue'
                        }`}
                      >
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex"
                        >
                          <ChevronDown size={16} aria-hidden="true" />
                        </motion.span>
                      </button>
                    </div>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          id="companies-menu"
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-[22rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(11,42,74,0.16)]">
                            {companies.map((company) => (
                              <Link
                                key={company.name}
                                to={`/ventures/${company.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-sky focus-ring"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue/10 font-heading text-xs font-extrabold text-blue">
                                  {company.name
                                    .replace('e2e ', '')
                                    .slice(0, 2)
                                    .toUpperCase()}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center gap-1.5 font-heading text-sm font-bold text-navy">
                                    {company.name}
                                    <ArrowRight
                                      size={14}
                                      aria-hidden="true"
                                      className="opacity-0 transition-opacity group-hover/item:opacity-100"
                                    />
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                                    {company.tags.join(' · ')}
                                  </span>
                                </span>
                              </Link>
                            ))}

                            <Link
                              to="/ventures"
                              onClick={() => setDropdownOpen(false)}
                              className="mt-1 flex items-center justify-between rounded-xl border-t border-slate-100 px-3 py-3 text-xs font-bold text-blue transition-colors hover:bg-sky focus-ring"
                            >
                              Explore all companies
                              <ArrowRight size={14} aria-hidden="true" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = isActive(item);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={`${linkBase} ${
                    active ? 'text-blue' : 'text-navy hover:text-blue'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-orange transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <Button
                to={navigationContent.cta.to}
                variant="orange"
                size="sm"
                iconRight={ArrowRight}
              >
                {navigationContent.cta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open main menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-sky focus-ring lg:hidden"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            ref={drawerRef}
            key="mobile-drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onKeyDown={handleDrawerKeyDown}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <Logo />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close main menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-sky hover:text-navy focus-ring"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile primary navigation"
              className="flex-1 overflow-y-auto px-4 py-6"
            >
              <ul className="space-y-1">
                {navigationContent.links.map((item) => {
                  if (item.dropdown) {
                    return (
                      <li key={item.to}>
                        <button
                          type="button"
                          aria-expanded={mobileCompaniesOpen}
                          aria-controls="mobile-companies"
                          onClick={() =>
                            setMobileCompaniesOpen((open) => !open)
                          }
                          className="flex w-full items-center justify-between rounded-full px-4 py-3 text-left font-heading text-base font-semibold text-navy transition-colors hover:bg-sky focus-ring"
                        >
                          {item.label}
                          <motion.span
                            animate={{ rotate: mobileCompaniesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex"
                          >
                            <ChevronDown size={18} aria-hidden="true" />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileCompaniesOpen && (
                            <motion.div
                              key="mobile-companies"
                              id="mobile-companies"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 pb-2 pl-3 pr-2 pt-1">
                                {companies.map((company) => (
                                  <Link
                                    key={company.name}
                                    to={`/ventures/${company.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-sky focus-ring"
                                  >
                                    <span className="font-heading text-sm font-bold text-navy">
                                      {company.name}
                                    </span>
                                    <ArrowRight
                                      size={15}
                                      aria-hidden="true"
                                      className="text-blue"
                                    />
                                  </Link>
                                ))}
                                <Link
                                  to="/ventures"
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between rounded-xl px-3 py-3 text-xs font-bold text-blue hover:bg-sky focus-ring"
                                >
                                  Explore all companies
                                  <ArrowRight size={14} aria-hidden="true" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  const active = isActive(item);

                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-center justify-between rounded-full px-4 py-3 font-heading text-base font-semibold transition-colors focus-ring ${
                          active ? 'bg-sky text-blue' : 'text-navy hover:bg-sky'
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-orange"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-2xl bg-navy p-5 text-white">
                <p className="font-heading text-sm font-bold">
                  Ready to grow with us?
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  Talk to our team about recruitment, IT, immigration or cyber
                  security.
                </p>
                <Button
                  to="/contact"
                  variant="orange"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </Button>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
