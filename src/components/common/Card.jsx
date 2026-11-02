/**
 * Card — Elevated card with optional hover lift.
 */
import { motion } from 'framer-motion';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children Card content.
 * @param {string} [props.className] Additional classes.
 * @param {boolean} [props.hover=true] Enable the hover lift animation.
 * @param {string} [props.padding='p-6 md:p-8'] Padding utility classes.
 * @param {React.ElementType} [props.as='div'] Element used when hover is disabled.
 */
const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'p-6 md:p-8',
  as: Tag = 'div',
  ...props
}) => {
  const Wrapper = hover ? motion.div : Tag;
  const hoverProps = hover
    ? {
        whileHover: { y: -6, boxShadow: 'var(--shadow-card-hover)' },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }
    : {};

  return (
    <Wrapper
      className={`bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] ${padding} ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Card;
