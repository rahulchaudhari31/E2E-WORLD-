/**
 * TrustStrip — Slim credibility strip beneath the hero.
 */
import { Calendar, Globe2, ShieldCheck } from 'lucide-react';

import { Container, Reveal } from '../common';
import { trustPoints } from '../../data/home';

const iconMap = { Calendar, Globe2, ShieldCheck };

const TrustStrip = () => {
  return (
    <section
      id="trust"
      aria-label="Company highlights"
      className="scroll-mt-[var(--nav-height)] border-y border-slate-100 bg-white"
    >
      <Container>
        <Reveal preset="fadeIn" className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon] || Globe2;
            return (
              <div
                key={point.label}
                className="flex items-center justify-center gap-3 px-4 py-4 text-center sm:px-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/[0.08] text-accent">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold leading-snug text-slate-600 sm:text-sm">
                  {point.label}
                </span>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
};

export default TrustStrip;
