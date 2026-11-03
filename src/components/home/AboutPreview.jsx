/**
 * AboutPreview — Group story with animated stat tiles.
 */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { AnimatedCounter, Container, Reveal } from '../common';
import { aboutSection } from '../../data/homeContent';

const toneClasses = {
  orange: 'bg-orange text-navy',
  blue: 'bg-blue text-white',
  lime: 'bg-lime text-navy',
  navy: 'bg-navy text-white',
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
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex min-h-36 flex-col justify-between rounded-2xl p-5 shadow-[var(--shadow-card)] sm:min-h-44 sm:p-6 ${
                    toneClasses[stat.tone] || toneClasses.blue
                  }`}
                >
                  <span className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    {typeof stat.value === 'number' ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] opacity-80 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
