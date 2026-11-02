import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, ImageWithFallback, Reveal, SectionHeading } from '../common';
import ventures from '../../data/ventures';
import { getVentureIcon } from './ventureIcons';

const OtherVentures = ({ currentSlug }) => {
  const others = ventures.filter((venture) => venture.slug !== currentSlug);

  if (others.length === 0) return null;

  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Other ventures"
          subtitle="Discover the other specialist teams that make up e2e World Group."
        />

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {others.map((venture) => {
            const Icon = getVentureIcon(venture.icon);

            return (
              <Reveal
                key={venture.slug}
                preset="fadeUp"
                className="h-full w-[85%] shrink-0 snap-start sm:w-[55%] lg:w-auto"
              >
                <Link
                  to={`/ventures/${venture.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ImageWithFallback
                      src={venture.image}
                      alt={`${venture.name} — ${venture.tagline}`}
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ring-1 ring-white/20"
                      style={{ backgroundColor: venture.color }}
                    >
                      <Icon size={21} aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold font-heading text-navy">
                      {venture.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {venture.tagline}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold"
                      style={{ color: venture.color }}
                    >
                      View Details
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default OtherVentures;
