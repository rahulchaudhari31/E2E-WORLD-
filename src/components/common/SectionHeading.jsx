/**
 * SectionHeading — Eyebrow + Title + Subtitle block.
 */
import { motion } from 'framer-motion';

/**
 * @param {object} props
 * @param {string} [props.eyebrow] Small uppercase label.
 * @param {string} props.title Section heading.
 * @param {string} [props.subtitle] Supporting copy.
 * @param {'center'|'left'} [props.align='center'] Text alignment.
 * @param {boolean} [props.light=false] Use light text on dark backgrounds.
 * @param {string} [props.className] Additional classes.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignCls = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignCls[align]} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block mb-3 text-sm font-semibold tracking-widest uppercase ${
            light ? 'text-teal-light' : 'text-accent'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading leading-[1.08] tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
