/**
 * CompaniesSection — Four company cards, each with a thick blue top border.
 */
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { Container, Reveal } from '../common';
import { companiesSection } from '../../data/homeContent';

const CompaniesSection = () => {
  const { eyebrow, heading, subtext, companies } = companiesSection;

  return (
    <section
      id="companies"
      className="scroll-mt-[var(--nav-height)] bg-white py-20 md:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {heading.before}
            <span className="text-blue">{heading.accent}</span>
            {heading.after}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {subtext}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {companies.map((company, index) => (
            <Reveal key={company.name} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 border-t-[6px] border-t-blue bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-t-orange hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="font-heading text-xl font-extrabold tracking-tight text-navy">
                  {company.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {company.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.68rem] font-semibold text-navy/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 font-heading text-sm font-bold text-blue transition-colors hover:text-orange-dark focus-ring"
                >
                  Visit website
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompaniesSection;
