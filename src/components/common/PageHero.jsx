/**
 * PageHero — Shared inner-page hero with image, breadcrumb and gradient overlay.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

/**
 * @param {object} props
 * @param {string} [props.eyebrow] Small uppercase label above the title.
 * @param {string} props.title Page heading.
 * @param {string} [props.subtitle] Supporting copy.
 * @param {{label: string, to?: string}[]} [props.breadcrumb] Breadcrumb trail.
 * @param {string} [props.image] Background image URL.
 * @param {string} [props.themeColor] Optional venture accent colour.
 * @param {string} [props.badge] Optional badge text.
 * @param {string} [props.className] Additional section classes.
 * @param {React.ReactNode} [props.children] Optional content below the copy.
 */
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  breadcrumb = [],
  image,
  themeColor,
  badge,
  className = '',
  children,
}) => {
  const accent = themeColor || '#2DD4BF';

  return (
    <section className={`relative isolate overflow-hidden bg-navy ${className}`}>
      {image && (
        <img
          src={image}
          alt=""
          loading="eager"
          decoding="async"
          fetchpriority="high"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/25"
        aria-hidden="true"
      />
      {themeColor && (
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `linear-gradient(135deg, ${accent}26 0%, transparent 55%)`,
          }}
        />
      )}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
        aria-hidden="true"
        style={{ backgroundColor: `${accent}33` }}
      />

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
                {breadcrumb.map((item, index) => {
                  const isLast = index === breadcrumb.length - 1;

                  return (
                    <li key={item.label} className="flex items-center gap-2">
                      {item.to && !isLast ? (
                        <Link
                          to={item.to}
                          className="transition-colors hover:text-white focus-ring rounded"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span
                          aria-current={isLast ? 'page' : undefined}
                          style={isLast ? { color: accent } : undefined}
                        >
                          {item.label}
                        </span>
                      )}
                      {!isLast && (
                        <ChevronRight
                          size={13}
                          className="text-slate-500"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <span
              className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase"
              style={{ color: accent }}
            >
              {eyebrow}
            </span>
          )}

          <h1 className="text-4xl font-bold leading-tight font-heading text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              {subtitle}
            </p>
          )}

          {badge && (
            <span
              className="mt-5 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide"
              style={{
                backgroundColor: `${accent}1f`,
                borderColor: `${accent}40`,
                color: accent,
              }}
            >
              {badge}
            </span>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
};

export default PageHero;
