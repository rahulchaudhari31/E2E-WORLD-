/**
 * AboutPreview — Split image/content introduction to the group.
 */
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

import images from '../../data/images';
import { company } from '../../data/site';
import {
  Button,
  Container,
  ImageWithFallback,
  Reveal,
  SectionHeading,
} from '../common';

const AboutPreview = () => {
  return (
    <section aria-label="About e2e World Group" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal preset="fadeLeft" className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,31,58,0.18)]">
                <ImageWithFallback
                  src={images.office}
                  alt="The e2e World Group office"
                  className="aspect-[4/3] w-full"
                />
              </div>

              <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block md:w-56">
                <ImageWithFallback
                  src={images.teamMeeting}
                  alt="The e2e World Group team in a meeting"
                  className="aspect-square w-full"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -left-3 -top-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl md:-left-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Sparkles size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Founded
                  </p>
                  <p className="font-heading text-xl font-extrabold leading-none text-navy">
                    {company.founded}
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal preset="fadeRight" delay={0.1}>
            <SectionHeading
              eyebrow="About e2e World Group"
              title="A trusted partner for businesses that think beyond borders."
              align="left"
              className="mb-6 md:mb-8"
            />

            <p className="text-base leading-relaxed text-slate-600">
              {company.description}
            </p>

            <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our vision
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {company.vision}
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'UK Head Office in Birmingham',
                'Global footprint across five regions',
                'Four specialist group ventures',
                'End-to-end service delivery',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2
                    size={18}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-teal"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <Button to="/about" variant="primary" className="mt-8" iconRight={ArrowRight}>
              Learn More About Us
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
