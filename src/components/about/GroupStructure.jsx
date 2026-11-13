import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Globe,
  Monitor,
  Shield,
  Users,
} from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../common';
import { company } from '../../data/site';
import ventures from '../../data/ventures';
import images from '../../data/images';

const iconMap = { Users, Monitor, Globe, Shield };

const GroupNode = () => {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-navy">
        Group
      </span>
      <div className="relative overflow-hidden rounded-2xl bg-navy p-6 text-center text-white shadow-xl ring-1 ring-white/15">
        <div
          className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-teal-light ring-1 ring-white/15">
            <Building2 size={24} aria-hidden="true" />
          </span>
          <p className="mt-3 text-lg font-bold font-heading">{company.name}</p>
          <p className="mt-1 text-sm text-slate-300">{company.tagline}</p>
        </div>
      </div>
    </div>
  );
};

const VentureNode = ({ venture }) => {
  const Icon = iconMap[venture.icon] || Globe;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="h-full"
    >
      <Link
        to={`/ventures/${venture.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-ring"
        aria-label={`Explore ${venture.name}`}
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${venture.color}15`,
            color: venture.color,
          }}
        >
          <Icon size={22} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold font-heading text-navy">
          {venture.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {venture.tagline}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold"
          style={{ color: venture.color }}
        >
          Explore company
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </motion.div>
  );
};

const GroupStructure = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
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
        <SectionHeading
          eyebrow="Our Group"
          title="One group. Four specialist companies."
          subtitle="A connected family of businesses working together to support every stage of your journey — from hiring to growth."
        />

        <Reveal preset="fadeUp">
          <div className="relative">
            <GroupNode />

            {/* Desktop branching connectors */}
            <div className="relative hidden lg:block">
              <div
                className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-slate-300"
                aria-hidden="true"
              />
              <div
                className="absolute top-8 h-px bg-slate-300"
                style={{
                  left: 'calc(12.5% - 7.5px)',
                  right: 'calc(12.5% - 7.5px)',
                }}
                aria-hidden="true"
              />
              <div className="grid grid-cols-4 gap-5">
                {ventures.map((venture) => (
                  <div key={venture.slug} className="relative pt-16">
                    <span
                      className="absolute left-1/2 top-8 h-8 w-px -translate-x-1/2 bg-slate-300"
                      aria-hidden="true"
                    />
                    <VentureNode venture={venture} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile stacked connectors */}
            <div className="relative lg:hidden">
              <div className="relative h-6">
                <span
                  className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-slate-300"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-5 right-1/2 top-6 h-px bg-slate-300"
                  aria-hidden="true"
                />
              </div>
              <div className="relative space-y-4 pt-6">
                <span
                  className="absolute bottom-8 left-5 top-0 w-px bg-slate-200"
                  aria-hidden="true"
                />
                {ventures.map((venture) => (
                  <div key={venture.slug} className="relative pl-10">
                    <span
                      className="absolute left-5 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-white"
                      aria-hidden="true"
                    />
                    <VentureNode venture={venture} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default GroupStructure;
