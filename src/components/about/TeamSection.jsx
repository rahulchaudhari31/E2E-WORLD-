import { motion } from 'framer-motion';
import { Container, ImageWithFallback, Reveal, SectionHeading } from '../common';
import { LinkedInIcon } from '../layout/SocialIcons';
import { teamMembers } from '../../data/site';

const TeamSection = () => {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our People"
          title="Meet the team behind the group"
          subtitle="Placeholder profiles — client to confirm names, titles and portraits."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} preset="fadeUp" delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <ImageWithFallback
                      src={member.image}
                      alt={`Placeholder portrait for ${member.name}`}
                      className="h-full w-full"
                    />
                  </div>

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  {member.placeholder && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
                      Placeholder
                    </span>
                  )}

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile placeholder for ${member.name}`}
                    className="absolute right-4 top-4 inline-flex h-11 w-11 translate-y-0 items-center justify-center rounded-full bg-white text-navy opacity-100 shadow-lg transition-all duration-300 hover:bg-accent hover:text-white focus-ring lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
                  >
                    <LinkedInIcon size={17} />
                  </a>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-bold font-heading text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{member.title}</p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
