import { motion } from 'framer-motion';
import {
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../common';
import { coreValues } from '../../data/site';

const iconMap = {
  Handshake,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingUp,
  Trophy,
};

const CoreValues = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our core values"
          subtitle="The standards we bring to every client relationship, project and placement."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {coreValues.map((value, index) => {
            const Icon = iconMap[value.icon] || Lightbulb;

            return (
              <Reveal key={value.title} preset="fadeUp" delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:border-accent/20 hover:shadow-[var(--shadow-card-hover)] sm:p-7"
                >
                  <span
                    className="absolute -right-1 -top-3 text-6xl font-bold font-heading text-slate-50 transition-colors duration-300 group-hover:text-accent/[0.06]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold font-heading text-navy">
                      {value.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
