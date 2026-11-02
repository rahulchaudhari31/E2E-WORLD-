/**
 * Container — Responsive max-width wrapper.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children Content to constrain.
 * @param {string} [props.className] Additional classes.
 * @param {React.ElementType} [props.as='div'] Element or component to render.
 */
const Container = ({ children, className = '', as: Tag = 'div', ...props }) => {
  return (
    <Tag
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
