import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Badge, Button, ImageWithFallback, Reveal } from '../common';
import { getVentureIcon } from './ventureIcons';

const ZigZagVentureRow = ({ venture, reverse = false }) => {
  const Icon = getVentureIcon(venture.icon);

  return (
    <Reveal preset={reverse ? 'fadeLeft' : 'fadeRight'}>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className={`relative ${reverse ? 'lg:order-2' : ''}`}
        >
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <ImageWithFallback
              src={venture.image}
              alt={`${venture.name} — ${venture.tagline}`}
              className="h-[280px] w-full sm:h-[360px] lg:h-[420px]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden sm:block">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl ring-1 ring-white/20"
              style={{ backgroundColor: venture.color }}
            >
              <Icon size={26} aria-hidden="true" />
            </span>
          </div>
        </motion.div>

        <div className={reverse ? 'lg:order-1' : ''}>
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl sm:hidden"
              style={{
                backgroundColor: `${venture.color}15`,
                color: venture.color,
              }}
            >
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {venture.tagline}
              </p>
              <h2 className="mt-1 text-3xl font-bold font-heading text-navy sm:text-4xl">
                {venture.name}
              </h2>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-slate-600">
            {venture.shortDescription}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Key services
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {venture.services.slice(0, 6).map((service) => (
                <Badge key={service} color={venture.color}>
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Regions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {venture.regions.map((region) => (
                <span
                  key={region}
                  className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              to={`/ventures/${venture.slug}`}
              variant="primary"
              iconRight={ArrowRight}
            >
              View Details
            </Button>
            <Button
              href={venture.externalUrl}
              external
              variant="outline"
              iconRight={ExternalLink}
              aria-label={`Visit ${venture.name} website (opens in a new tab)`}
            >
              Visit Website
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export default ZigZagVentureRow;
