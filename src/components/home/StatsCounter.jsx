/**
 * StatsCounter — Animated, factual group numbers.
 */
import { AnimatedCounter, Container, Reveal } from '../common';
import { company } from '../../data/site';
import ventures from '../../data/ventures';

const yearsOfExperience = new Date().getFullYear() - company.founded;

const regions = new Set();
ventures.forEach((venture) => {
  venture.regions.forEach((region) => {
    if (region !== 'Global') regions.add(region);
  });
});

const stats = [
  {
    value: yearsOfExperience,
    label: 'Years of experience',
    description: `Supporting businesses since ${company.founded}.`,
  },
  {
    value: ventures.length,
    label: 'Group ventures',
    description: 'Specialist companies working as one group.',
  },
  {
    value: regions.size,
    label: 'Global regions',
    description: 'UK, Europe, Middle East, South East Asia and South Asia.',
  },
];

const StatsCounter = () => {
  return (
    <section
      aria-label="e2e World Group at a glance"
      className="border-b border-slate-100 bg-white py-16 md:py-20"
    >
      <Container>
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-slate-100">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-2 text-center sm:px-8 lg:px-12"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="text-gradient block font-heading text-5xl font-extrabold tracking-tight md:text-6xl"
                />
                <p className="mt-2 font-heading text-sm font-bold uppercase tracking-[0.16em] text-navy">
                  {stat.label}
                </p>
                <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default StatsCounter;
