/**
 * Logo — Single source of truth for the e2e World Group brand mark.
 * Swap the SVG/text here when the official logo file is available.
 */
import { Link } from 'react-router-dom';

const Logo = ({ light = false, className = '' }) => {
  return (
    <Link
      to="/"
      aria-label="e2e World Group — Home"
      className={`group inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-lg focus-ring ${className}`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
          light
            ? 'bg-white/10 text-teal-light ring-1 ring-white/20'
            : 'bg-accent/10 text-accent ring-1 ring-accent/15'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.45 2.47 3.75 5.58 3.75 9S14.45 18.53 12 21c-2.45-2.47-3.75-5.58-3.75-9S9.55 5.47 12 3Z" />
          <path d="M4.65 7.5h14.7M4.65 16.5h14.7" />
        </svg>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-extrabold tracking-tight transition-colors duration-300 ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          e2e
          <span className={light ? 'text-teal-light' : 'text-accent'}> World</span>
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Group
        </span>
      </span>
    </Link>
  );
};

export default Logo;
