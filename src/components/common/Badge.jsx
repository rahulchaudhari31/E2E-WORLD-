/**
 * Badge — Small coloured label.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Label content.
 * @param {string} [props.color] Optional hex colour for a custom tint.
 * @param {string} [props.className] Additional classes.
 */
const Badge = ({ children, color, className = '' }) => {
  const style = color
    ? { backgroundColor: `${color}15`, color }
    : {};

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-[var(--radius-badge)] ${
        !color ? 'bg-accent/10 text-accent' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

export default Badge;
