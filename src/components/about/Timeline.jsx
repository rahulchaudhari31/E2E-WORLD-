import { motion } from 'framer-motion';
import { Container, Reveal, SectionHeading } from '../common';
import { timeline } from '../../data/site';

const Timeline = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Journey"
          title="A timeline of growth"
          subtitle="From our founding in Birmingham to a connected group of four specialist companies."
        />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-teal to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative pl-12 md:w-1/2 md:py-6 md:pl-0 ${
                    isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <span
                    className={`absolute left-4 top-3 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white shadow md:left-1/2 md:top-8 ${
                      item.placeholder ? 'bg-slate-300' : 'bg-accent'
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute top-8 hidden h-px w-12 bg-slate-200 md:block ${
                      isLeft ? 'right-0' : 'left-0'
                    }`}
                    aria-hidden="true"
                  />

                  <Reveal
                    preset={isLeft ? 'fadeRight' : 'fadeLeft'}
                    delay={0.05}
                  >
                    <article
                      className={`relative rounded-2xl border bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-7 ${
                        item.placeholder
                          ? 'border-dashed border-slate-300'
                          : 'border-slate-100'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ${
                            item.placeholder
                              ? 'bg-slate-100 text-slate-600'
                              : 'bg-accent/10 text-accent'
                          }`}
                        >
                          {item.year}
                        </span>
                        {item.placeholder && (
                          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                            Placeholder
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold font-heading text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
