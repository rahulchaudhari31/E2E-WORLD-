/**
 * Button — Primary / Outline / Ghost variants.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 font-heading font-semibold transition-all duration-300 focus-ring cursor-pointer';

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-[var(--radius-button)]',
  md: 'px-6 py-3 text-base rounded-[var(--radius-button)]',
  lg: 'px-8 py-4 text-lg rounded-[var(--radius-button)]',
};

const variants = {
  primary:
    'bg-accent text-white shadow-[var(--shadow-button)] hover:bg-accent-dark hover:shadow-lg active:scale-[0.97]',
  blue:
    'bg-blue text-white shadow-[0_8px_20px_rgba(31,119,192,0.28)] hover:bg-blue-dark hover:shadow-lg active:scale-[0.97]',
  orange:
    'bg-orange text-navy shadow-[0_8px_20px_rgba(245,154,31,0.32)] hover:bg-orange-dark hover:text-navy active:scale-[0.97]',
  navy:
    'bg-navy text-white shadow-[0_8px_20px_rgba(11,42,74,0.24)] hover:bg-navy-light hover:shadow-lg active:scale-[0.97]',
  outline:
    'border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white active:scale-[0.97]',
  ghost:
    'text-accent bg-transparent hover:bg-accent/10 active:scale-[0.97]',
  white:
    'bg-white text-navy shadow-md hover:shadow-lg hover:bg-slate-50 active:scale-[0.97]',
};

/**
 * @param {object} props
 * @param {React.ReactNode} props.children Button label and optional content.
 * @param {'primary'|'blue'|'orange'|'navy'|'outline'|'ghost'|'white'} [props.variant='primary'] Visual style.
 * @param {'sm'|'md'|'lg'} [props.size='md'] Control size.
 * @param {string} [props.href] External URL; opens in a new tab.
 * @param {string} [props.to] Internal React Router path.
 * @param {boolean} [props.external] Force external-link behaviour.
 * @param {string} [props.className] Additional classes.
 * @param {React.ComponentType} [props.icon] Leading icon component.
 * @param {React.ComponentType} [props.iconRight] Trailing icon component.
 * @param {'button'|'submit'|'reset'} [props.type='button'] Button type.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  external,
  className = '',
  icon: Icon,
  iconRight: IconRight,
  type = 'button',
  ...props
}) => {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : 20} />}
      {children}
      {IconRight && <IconRight size={size === 'sm' ? 16 : 20} />}
    </>
  );

  /* External link */
  if (href || external) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  /* React Router link */
  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={cls} {...props}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  /* Plain button */
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      {...props}
    >
      {inner}
    </motion.button>
  );
};

export default Button;
