/**
 * WhyChooseUs — Six factual differentiators for the group.
 */
import { motion } from 'framer-motion';
import {
  Briefcase,
  Cpu,
  Globe2,
  Layers,
  Settings2,
  ShieldCheck,
} from 'lucide-react';

import { Container, Reveal, SectionHeading } from '../common';
import { whyChooseUs } from '../../data/home';

const iconMap = { Layers, Globe2, Briefcase, ShieldCheck, Settings2, Cpu };

const WhyChooseUs = () => {
  return (
    <section
      aria-label="Why choose e2e World Group"
      className="relative overflow-hidden bg-navy py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="One group. Specialist expertise at every turn."
            subtitle="From workforce planning and technical hiring to immigration compliance and digital security, our ventures work together to support your growth."
            light
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;

            return (
              <Reveal key={item.title} preset="fadeUp" delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-teal/30 hover:bg-white/[0.07]"
                >
                  <span className="absolute right-5 top-5 font-heading text-xs font-bold tracking-widest text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] text-teal-light ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-teal group-hover:text-navy-dark">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
