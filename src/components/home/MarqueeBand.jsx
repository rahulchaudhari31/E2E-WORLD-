/**
 * MarqueeBand — Orange infinite ticker of the sectors the group serves.
 */
import { marqueeItems } from '../../data/homeContent';

const MarqueeRow = ({ hidden = false }) => (
  <ul
    aria-hidden={hidden ? 'true' : undefined}
    className="flex shrink-0 items-center"
  >
    {marqueeItems.map((item) => (
      <li
        key={`${hidden ? 'clone-' : ''}${item}`}
        className="flex shrink-0 items-center gap-6 px-6 font-heading text-xl font-extrabold tracking-tight text-navy sm:text-2xl lg:text-3xl"
      >
        {item}
        <span aria-hidden="true" className="text-navy/50">
          +
        </span>
      </li>
    ))}
  </ul>
);

const MarqueeBand = () => {
  return (
    <section
      aria-label="Sectors we serve"
      className="marquee overflow-hidden border-y border-orange-dark/10 bg-orange py-4 sm:py-5"
    >
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </section>
  );
};

export default MarqueeBand;
