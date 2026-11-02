import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../common';
import { company } from '../../data/site';

const cards = [
  {
    label: 'Our Mission',
    text: company.mission,
    icon: Target,
    accent: 'from-accent to-accent-light',
    iconClass: 'text-accent',
  },
  {
    label: 'Our Vision',
    text: company.vision,
    icon: Eye,
    accent: 'from-teal to-teal-light',
    iconClass: 'text-teal',
  },
];

const MissionVision = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Purpose"
          title="Our mission and vision"
          subtitle="The principles that guide every partnership, project and placement we deliver."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.label} preset="fadeUp" delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-xl sm:p-9"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent}`}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-150"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <span
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 ${card.iconClass} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold font-heading text-navy">
                      {card.label}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      {card.text}
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

export default MissionVision;
