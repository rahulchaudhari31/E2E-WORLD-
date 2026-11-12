/**
 * AboutPreview — Group story with animated stat tiles.
 */
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calendar, Globe2, ShieldCheck } from 'lucide-react';

import { AnimatedCounter, Container, Reveal } from '../common';
import { aboutSection } from '../../data/homeContent';

const toneClasses = {
  orange: 'bg-orange/15 text-orange-dark',
  blue: 'bg-blue/10 text-blue',
  lime: 'bg-lime/40 text-lime-dark',
  navy: 'bg-navy/10 text-navy',
};

const toneIcons = {
  orange: Calendar,
  blue: Building2,
  lime: Globe2,
  navy: ShieldCheck,
};

const AboutPreview = () => {
  const { eyebrow, heading, paragraph, cta, stats } = aboutSection;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal preset="fadeRight">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {heading.before}
              <span className="text-blue">{heading.accent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {paragraph}
            </p>
            <Link
              to={cta.to}
              className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 font-heading text-base font-bold text-white shadow-[0_10px_24px_rgba(11,42,74,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light focus-ring"
            >
              {cta.label}
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <Reveal preset="fadeLeft" delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => {
                const Icon = toneIcons[stat.tone] || Building2;
                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-[var(--shadow-card)]"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        toneClasses[stat.tone] || toneClasses.blue
                      }`}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <span className="block font-heading text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                        {typeof stat.value === 'number' ? (
                          <AnimatedCounter value={stat.value} />
                        ) : (
                          stat.value
                        )}
                      </span>
                      <span className="mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted sm:text-xs">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
