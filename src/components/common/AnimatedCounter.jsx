/**
 * AnimatedCounter — Counts up from 0 to `value` when in view.
 */
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';

/**
 * @param {object} props
 * @param {number} props.value Final value to display.
 * @param {string} [props.suffix] Text appended after the number.
 * @param {string} [props.prefix] Text prepended before the number.
 * @param {number} [props.duration=2000] Count-up duration in milliseconds.
 * @param {string} [props.className] Additional classes.
 */
const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reduceMotion) return;

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [duration, inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduceMotion ? value : count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
