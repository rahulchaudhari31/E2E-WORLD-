/**
 * Footer — Dark navy global footer with venture links, contact info
 * and a floating back-to-top control.
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

import { Container } from '../common';
import Logo from './Logo';
import { FacebookIcon, LinkedInIcon } from './SocialIcons';
import { contact, navigation } from '../../data/site';
import ventures from '../../data/ventures';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const year = new Date().getFullYear();
  const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-navy text-slate-300">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
        />

        <Container className="relative py-14 md:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Logo light />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
                End-to-end recruitment, HR, IT, immigration and cyber security
                solutions for businesses ready to grow globally.
              </p>

              <div className="mt-7">
                <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Stay Connected
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="e2e World Group on LinkedIn (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:bg-teal hover:text-navy-dark focus-ring"
                  >
                    <LinkedInIcon size={17} />
                  </a>
                  <a
                    href={contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="e2e World Group on Facebook (opens in a new tab)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:bg-teal hover:text-navy-dark focus-ring"
                  >
                    <FacebookIcon size={17} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer quick links">
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Quick Links
              </h2>
              <ul className="mt-3 space-y-1 text-sm">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="group inline-flex min-h-11 items-center gap-2 text-slate-400 transition-colors hover:text-white focus-ring"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-teal transition-transform duration-300 group-hover:scale-150"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Ventures */}
            <nav aria-label="Our venture websites">
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Our Ventures
              </h2>
              <ul className="mt-3 space-y-1 text-sm">
                {ventures.map((venture) => (
                  <li key={venture.slug}>
                    <a
                      href={venture.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-11 items-center gap-1.5 text-slate-400 transition-colors hover:text-white focus-ring"
                    >
                      {venture.name}
                      <ExternalLink
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

            {/* Contact */}
            <div>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Contact
              </h2>
              <address className="mt-5 space-y-4 text-sm not-italic text-slate-400">
                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-teal"
                  />
                  <span className="leading-relaxed">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.line3}
                    <br />
                    {contact.address.postcode}, {contact.address.country}
                  </span>
                </div>

                <a
                  href={phoneHref}
                  className="flex min-h-11 items-center gap-3 transition-colors hover:text-white focus-ring"
                >
                  <Phone size={18} aria-hidden="true" className="shrink-0 text-teal" />
                  {contact.phone}
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex min-h-11 items-center gap-3 transition-colors hover:text-white focus-ring"
                >
                  <Mail size={18} aria-hidden="true" className="shrink-0 text-teal" />
                  {contact.email}
                </a>
              </address>
            </div>
          </div>
        </Container>

        <div className="relative border-t border-white/10">
          <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
            <p>&copy; {year} e2e World Group. All rights reserved.</p>
            <p className="text-slate-500">End-to-End Solutions. Worldwide Impact.</p>
          </Container>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_30px_rgba(37,99,235,0.45)] transition-colors hover:bg-accent-dark focus-ring sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
