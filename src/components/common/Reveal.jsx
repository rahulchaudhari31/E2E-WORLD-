/**
 * Reveal — Scroll-triggered animation wrapper using Framer Motion.
 */
import { motion } from 'framer-motion';

const presets = {
  fadeUp: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleUp: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children Content to reveal.
 * @param {'fadeUp'|'fadeDown'|'fadeLeft'|'fadeRight'|'fadeIn'|'scaleUp'} [props.preset='fadeUp'] Animation preset.
 * @param {number} [props.delay=0] Delay in seconds.
 * @param {number} [props.duration=0.6] Animation duration in seconds.
 * @param {boolean} [props.once=true] Animate only the first time it enters view.
 * @param {number} [props.amount=0.3] Viewport visibility threshold.
 * @param {string} [props.className] Additional classes.
 * @param {string} [props.as='div'] Motion element to render.
 */
const Reveal = ({
  children,
  preset = 'fadeUp',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className = '',
  as = 'div',
}) => {
  const MotionTag = motion[as] || motion.div;
  const anim = presets[preset] || presets.fadeUp;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={anim}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
