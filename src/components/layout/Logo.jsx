import { Link } from 'react-router-dom';

const Logo = ({ variant = 'navbar', className = '' }) => {
  const isFooter = variant === 'footer';

  return (
    <Link
      to="/"
      aria-label="e2e World Group — Home"
      className={`inline-flex shrink-0 items-center rounded-lg focus-ring ${className}`}
    >
      {isFooter ? (
        <img
          src="/logo-full.png"
          alt="e2e World Group"
          className="h-10 w-auto max-w-[190px] object-contain sm:h-12"
        />
      ) : (
        <img
          src="/logo.png"
          alt="e2e World Group"
          className="h-8 w-auto max-w-[105px] object-contain sm:h-9 sm:max-w-[118px]"
        />
      )}
    </Link>
  );
};

export default Logo;
