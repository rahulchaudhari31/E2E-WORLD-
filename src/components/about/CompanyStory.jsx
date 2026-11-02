import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Container, ImageWithFallback, Reveal } from '../common';
import { company } from '../../data/site';
import images from '../../data/images';

const CompanyStory = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-offwhite">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal preset="fadeRight">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                <ImageWithFallback
                  src={images.teamGroup}
                  alt="The e2e World Group team"
                  className="h-[320px] w-full sm:h-[420px] lg:h-[520px]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 left-6 right-6 sm:left-10 sm:right-auto sm:max-w-sm"
              >
                <div className="relative overflow-hidden rounded-2xl bg-navy text-white shadow-2xl">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/25 blur-2xl" />
                  <div className="relative p-6 sm:p-8">
                    <Quote className="mb-4 h-8 w-8 text-teal-light" aria-hidden="true" />
                    <p className="text-lg font-heading font-semibold leading-relaxed">
                      {company.mission}
                    </p>
                    <p className="mt-4 text-sm uppercase tracking-widest text-slate-400">
                      Our Mission
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal preset="fadeLeft" delay={0.1}>
            <div>
              <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-accent">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight font-heading text-navy sm:text-4xl lg:text-5xl">
                Building trusted solutions since 2007
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Founded in 2007, e2e World Group was established with a vision
                  to provide comprehensive talent and management solutions to
                  local businesses in the UK.
                </p>
                <p>{company.description}</p>
                <p>
                  Today, our family of specialist ventures delivers integrated
                  support across recruitment, HR, IT consulting, immigration,
                  and cybersecurity — combining local expertise with a global
                  outlook.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default CompanyStory;
