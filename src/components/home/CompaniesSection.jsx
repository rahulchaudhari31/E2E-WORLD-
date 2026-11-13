/**
 * CompaniesSection â€” Infinite company card marquee. All four company cards are
 * always present in the loop and scroll continuously, pausing on hover so the
 * cards can be read or clicked.
 */
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { Container, Reveal } from '../common';
import { companiesSection } from '../../data/homeContent';
import images from '../../data/images';

const SPEED = 90; // pixels per second

const CompanyCard = ({ company }) => (
  <article className="group flex w-[80vw] flex-none flex-col rounded-2xl border border-slate-200 border-t-[6px] border-t-blue bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:border-t-orange hover:shadow-[var(--shadow-card-hover)] sm:w-[20rem] lg:w-[18.5rem]">
    <h3 className="font-heading text-xl font-extrabold tracking-tight text-navy">
      {company.name}
    </h3>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
      {company.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-1.5">
      {company.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.68rem] font-semibold text-navy/70"
        >
          {tag}
        </span>
      ))}
    </div>

    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 font-heading text-sm font-bold text-blue transition-colors hover:text-orange-dark focus-ring"
    >
      Visit website
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  </article>
);

const CompaniesSection = () => {
  const { tagline, eyebrow, heading, subtext, companies } = companiesSection;
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const halfRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = setRef.current;
    if (!track || !firstSet) return undefined;

    const measure = () => {
      halfRef.current = firstSet.offsetWidth;
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(firstSet);

    const tick = (time) => {
      if (lastRef.current == null) lastRef.current = time;
      const delta = (time - lastRef.current) / 1000;
      lastRef.current = time;

      if (!pausedRef.current && halfRef.current > 0) {
        offsetRef.current += SPEED * delta;
        if (offsetRef.current >= halfRef.current) {
          offsetRef.current -= halfRef.current;
        }
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section
      id="companies"
      className="relative isolate scroll-mt-[var(--nav-height)] overflow-hidden bg-white py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={images.groupTeamBackground}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/45 to-white/10" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          {tagline && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-orange">
              {tagline}
            </p>
          )}
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading.before}
            <span className="text-blue">{heading.accent}</span>
            {heading.after}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {subtext}
          </p>
        </Reveal>
      </Container>

      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) resume();
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {[0, 1, 2].map((setIndex) => (
            <div
              key={setIndex}
              ref={setIndex === 0 ? setRef : undefined}
              aria-hidden={setIndex === 0 ? undefined : 'true'}
              className="flex shrink-0 gap-5 pr-5 lg:gap-6 lg:pr-6"
            >
              {companies.map((company) => (
                <CompanyCard
                  key={`${setIndex}-${company.slug}`}
                  company={company}
                />
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
        />
      </div>
    </section>
  );
};

export default CompaniesSection;
