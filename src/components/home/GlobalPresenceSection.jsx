/**
 * GlobalPresenceSection — Navy section with region pills.
 */
import { Container, Reveal } from '../common';
import { globalPresenceSection } from '../../data/homeContent';

const GlobalPresenceSection = () => {
  const { eyebrow, heading, regions } = globalPresenceSection;

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange/15 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-orange">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading.before}
            {heading.accent}
          </h2>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {regions.map((region) => (
              <li key={region.name}>
                <span className="inline-flex cursor-default items-center rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-orange hover:bg-orange/15 hover:text-white">
                  {region.name}
                  {region.suffix && (
                    <span className="ml-1.5 text-orange">{region.suffix}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
};

export default GlobalPresenceSection;
