/**
 * Navbar — Slim contact bar + sticky primary navigation.
 * Transparent over the home hero, glass-white after 40px of scroll.
 */
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Mail,
  Menu,
  Monitor,
  Phone,
  Shield,
  Users,
  X,
} from 'lucide-react';

import { Button, Container } from '../common';
import Logo from './Logo';
import { LinkedInIcon } from './SocialIcons';
import { company, contact, navigation } from '../../data/site';
import ventures from '../../data/ventures';

const iconMap = { Users, Monitor, Globe, Shield };

const linkMeta = {
  '/': { exact: true },
  '/ventures': { dropdown: true },
};

const navLinks = navigation.map((item) => ({ ...item, ...linkMeta[item.path] }));

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVenturesOpen, setMobileVenturesOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) setMobileOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const isActive = (item) => {
    if (!item) return false;
    if (item.exact || item.path === '/') return pathname === item.path;
    return pathname === item.path || pathname.startsWith(`${item.path}/`);
  };

  const venturesActive = isActive({ path: '/ventures' });

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  const closeMobile = () => setMobileOpen(false);

  const handleDrawerKeyDown = (event) => {
    if (event.key !== 'Tab') return;

    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
    'group relative inline-flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 font-heading text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-accent focus-ring';

  const activeText = 'text-accent';

  return (
    <>
      {/* ── Slim contact bar ─────────────────────────────── */}
      <div className="bg-navy-dark text-slate-300">
        <Container className="flex min-h-11 items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded px-2 transition-colors hover:text-white focus-ring"
            >
              <Phone size={13} aria-hidden="true" />
              <span className="hidden sm:inline">{contact.phone}</span>
              <span className="sr-only sm:hidden">Call {contact.phone}</span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="hidden min-h-11 items-center gap-2 rounded px-2 transition-colors hover:text-white focus-ring sm:inline-flex"
            >
              <Mail size={13} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-slate-400 md:inline">{company.tagline}</span>
            <a
              href={contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="e2e World Group on LinkedIn (opens in a new tab)"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-ring"
            >
              <LinkedInIcon size={13} />
            </a>
          </div>
        </Container>
      </div>

      {/* ── Sticky navbar ────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_8px_30px_rgba(11,31,58,0.08)]'
            : 'shadow-sm'
        }`}
      >
        <Container className="flex h-[var(--nav-height)] items-center justify-between gap-4">
          <Logo light={false} />

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            <LayoutGroup id="desktop-nav">
              {navLinks.map((item) => {
                const active = isActive(item);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      onBlur={handleDropdownBlur}
                    >
                      <button
                        type="button"
                        aria-expanded={dropdownOpen}
                        aria-controls="ventures-menu"
                        onClick={() => setDropdownOpen((open) => !open)}
                        onKeyDown={(event) => {
                          if (event.key === 'ArrowDown') {
                            event.preventDefault();
                            setDropdownOpen(true);
                          }
                        }}
                        className={`${linkBase} ${active ? activeText : ''}`}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex"
                        >
                          <ChevronDown size={15} aria-hidden="true" />
                        </motion.span>

                        {!active && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-current opacity-40 transition-transform duration-300 group-hover:scale-x-100"
                          />
                        )}
                        {active && (
                          <motion.span
                            layoutId="desktop-nav-underline"
                            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                      </button>

                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              id="ventures-menu"
                              initial={{ opacity: 0, y: 8, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="w-[30rem] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-2xl"
                            >
                              {ventures.map((venture) => {
                                const Icon = iconMap[venture.icon] || Globe;
                                return (
                                  <Link
                                    key={venture.slug}
                                    to={`/ventures/${venture.slug}`}
                                    onClick={() => setDropdownOpen(false)}
                                    className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 focus:bg-slate-50 focus-ring"
                                  >
                                    <span
                                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover/item:scale-105"
                                      style={{
                                        backgroundColor: `${venture.color}15`,
                                        color: venture.color,
                                      }}
                                    >
                                      <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0">
                                      <span className="flex items-center gap-1.5 font-heading text-sm font-bold text-navy">
                                        {venture.name}
                                        <ArrowRight
                                          size={14}
                                          aria-hidden="true"
                                          className="-translate-x-1 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                        />
                                      </span>
                                      <span className="mt-0.5 block truncate text-xs text-slate-500">
                                        {venture.tagline}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}

                              <div className="mt-1 border-t border-slate-100 px-2 pb-1 pt-2">
                                <Link
                                  to="/ventures"
                                  onClick={() => setDropdownOpen(false)}
                                  className="flex items-center justify-between rounded-lg px-2 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/5 focus-ring"
                                >
                                  Explore all ventures
                                  <ArrowRight size={14} aria-hidden="true" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={active ? 'page' : undefined}
                    className={`${linkBase} ${active ? activeText : ''}`}
                  >
                    {item.label}

                    {!active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-current opacity-40 transition-transform duration-300 group-hover:scale-x-100"
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="desktop-nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </LayoutGroup>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" size="sm" variant="primary">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open main menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy transition-colors hover:bg-slate-100 focus-ring lg:hidden"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </Container>
      </header>

      {/* ── Mobile drawer ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            aria-hidden="true"
            onClick={closeMobile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy-dark/60 backdrop-blur-sm lg:hidden"
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
            className="fixed inset-y-0 right-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <Logo />
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close main menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy focus-ring"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile primary navigation"
                className="flex-1 overflow-y-auto px-4 py-6"
              >
                <ul className="space-y-1">
                  {navLinks.map((item) => {
                    const active = isActive(item);

                    if (item.dropdown) {
                      return (
                        <li key={item.path}>
                          <button
                            type="button"
                            aria-expanded={mobileVenturesOpen}
                            aria-controls="mobile-ventures"
                            onClick={() => setMobileVenturesOpen((open) => !open)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-heading text-base font-semibold transition-colors focus-ring ${
                              venturesActive
                                ? 'bg-accent/10 text-accent'
                                : 'text-navy hover:bg-slate-50'
                            }`}
                          >
                            {item.label}
                            <motion.span
                              animate={{ rotate: mobileVenturesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="inline-flex"
                            >
                              <ChevronDown size={18} aria-hidden="true" />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileVenturesOpen && (
                              <motion.div
                                key="mobile-ventures"
                                id="mobile-ventures"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-1 pb-2 pl-3 pr-2 pt-1">
                                  {ventures.map((venture) => {
                                    const Icon = iconMap[venture.icon] || Globe;
                                    return (
                                      <Link
                                        key={venture.slug}
                                        to={`/ventures/${venture.slug}`}
                                        onClick={closeMobile}
                                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 focus:bg-slate-50 focus-ring"
                                      >
                                        <span
                                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                                          style={{
                                            backgroundColor: `${venture.color}15`,
                                            color: venture.color,
                                          }}
                                        >
                                          <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <span className="min-w-0">
                                          <span className="block font-heading text-sm font-bold text-navy">
                                            {venture.name}
                                          </span>
                                          <span className="mt-0.5 block truncate text-xs text-slate-500">
                                            {venture.tagline}
                                          </span>
                                        </span>
                                      </Link>
                                    );
                                  })}

                                  <Link
                                    to="/ventures"
                                    onClick={closeMobile}
                                    className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-accent hover:bg-accent/5 focus-ring"
                                  >
                                    View all ventures
                                    <ArrowRight size={14} aria-hidden="true" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    }

                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={closeMobile}
                          aria-current={active ? 'page' : undefined}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 font-heading text-base font-semibold transition-colors focus-ring ${
                            active
                              ? 'bg-accent/10 text-accent'
                              : 'text-navy hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                          {active && (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 rounded-2xl bg-navy p-5 text-white">
                  <p className="font-heading text-sm font-bold">Ready to grow with us?</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Talk to our team about recruitment, IT, immigration or cyber security.
                  </p>
                  <Button
                    to="/contact"
                    size="sm"
                    variant="white"
                    className="mt-4 w-full"
                    onClick={closeMobile}
                  >
                    Contact Us
                  </Button>
                  <a
                    href={phoneHref}
                    className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-300 transition-colors hover:text-white focus-ring"
                  >
                    <Phone size={14} aria-hidden="true" />
                    {contact.phone}
                  </a>
                </div>
              </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
