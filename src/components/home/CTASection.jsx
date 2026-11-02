/**
 * CTASection — Gradient contact banner.
 */
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

import { contact } from '../../data/site';
import { Button, Container, Reveal } from '../common';

const CTASection = () => {
  const phoneHref = `tel:${contact.phone.replace(/\s|\(0\)/g, '')}`;

  return (
    <section aria-label="Contact call to action" className="bg-white py-16 md:py-20">
      <Container>
        <Reveal preset="scaleUp">
          <div className="relative overflow-hidden rounded-3xl bg-accent-gradient px-6 py-14 shadow-[0_24px_80px_rgba(37,99,235,0.28)] sm:px-10 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-navy/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
            >
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Let&apos;s work together
                </p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                  Have any questions? Feel free to contact us!
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                  Tell us about your recruitment, IT, immigration or digital
                  needs and our team will point you to the right specialist
                  venture.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col lg:flex-row">
                <Button
                  to="/contact"
                  variant="white"
                  size="lg"
                  iconRight={ArrowRight}
                  className="whitespace-nowrap"
                >
                  Contact Us
                </Button>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] border border-white/30 bg-white/10 px-6 py-4 font-heading text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-ring"
                >
                  <Phone size={17} aria-hidden="true" />
                  {contact.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default CTASection;
