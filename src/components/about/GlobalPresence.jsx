import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { Container, SectionHeading } from '../common';
import { globalRegions } from '../../data/site';

const GlobalPresence = () => {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <Globe2
        className="absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-white/[0.03]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Global Reach"
          title="Local roots. Global reach."
          subtitle="From our UK head office in Birmingham, we support clients and talent across five connected regions."
        />

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {globalRegions.map((region, index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 14, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-teal/40 hover:bg-white/10 sm:px-5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal/20 text-teal-light transition-colors duration-300 group-hover:bg-teal group-hover:text-navy">
                  <Globe2 size={14} aria-hidden="true" />
                </span>
                {region}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 text-center text-sm text-slate-400"
        >
          One group, {globalRegions.length} regions, endless possibilities.
        </motion.p>
      </Container>
    </section>
  );
};

export default GlobalPresence;
