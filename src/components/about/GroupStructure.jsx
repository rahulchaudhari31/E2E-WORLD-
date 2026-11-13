import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Globe,
  Monitor,
  Shield,
  Users,
} from 'lucide-react';
import './our-group.css';

const companies = [
  {
    name: 'e2e Infosys',
    tagline: 'Navigating the new digital landscape.',
    slug: 'e2e-infosys',
    color: '#14B8A6',
    Icon: Monitor,
    position: 'tl',
  },
  {
    name: 'e2e HRC',
    tagline: 'Connecting talent with opportunity.',
    slug: 'e2e-hrc',
    color: '#1A75BB',
    Icon: Users,
    position: 'tr',
  },
  {
    name: 'e2e Cyber Solutions',
    tagline: 'Disruptive ideas. Strategic execution.',
    slug: 'e2e-cyber-solutions',
    color: '#EF4444',
    Icon: Shield,
    position: 'bl',
  },
  {
    name: 'elite PiC',
    tagline: 'Expert guidance through UK immigration.',
    slug: 'elite-pic',
    color: '#F7941D',
    Icon: Globe,
    position: 'br',
  },
];

const GroupCard = ({
  company,
  className = '',
  onActivate,
  onDeactivate,
}) => {
  const { name, tagline, slug, color, Icon } = company;

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onDeactivate?.();
    }
  };

  return (
    <article
      className={`our-group-card ${className}`.trim()}
      style={{ '--accent': color }}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={handleBlur}
    >
      <span
        className="our-group-card-icon"
        style={{ backgroundColor: `${color}1A`, color }}
        aria-hidden="true"
      >
        <Icon size={30} strokeWidth={1.8} />
      </span>
      <h3 className="our-group-card-title">{name}</h3>
      <p className="our-group-card-desc">{tagline}</p>
      <span className="our-group-card-cta" style={{ color }}>
        Explore company
        <ArrowRight
          className="our-group-card-arrow"
          size={15}
          aria-hidden="true"
        />
      </span>
      <Link
        to={`/ventures/${slug}`}
        className="our-group-card-stretched"
        aria-label={`Explore ${name}`}
      />
    </article>
  );
};

const CenterCard = () => (
  <div className="our-group-center-card">
    <span className="our-group-center-badge">GROUP</span>
    <span className="our-group-center-icon" aria-hidden="true">
      <Building2 size={26} strokeWidth={1.8} />
    </span>
    <h3 className="our-group-center-title">e2e World Group</h3>
    <p className="our-group-center-tagline">
      Talent. Technology. Compliance. Growth.
    </p>
  </div>
);

const DesktopDiagram = () => (
  <svg
    className="our-group-stage-art"
    viewBox="0 0 1280 720"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <image
      href="/our-group-world-map.svg"
      x="140"
      y="110"
      width="1000"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      opacity="0.5"
    />
    <circle
      className="our-group-circle"
      cx="640"
      cy="360"
      r="210"
      fill="none"
      stroke="#F7941D"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
    <circle
      className="our-group-orbit"
      cx="640"
      cy="360"
      r="220"
      fill="none"
      stroke="#F7941D"
      strokeWidth="1.5"
      strokeDasharray="2 12"
      strokeLinecap="round"
      opacity="0.45"
      vectorEffect="non-scaling-stroke"
    />
    <g
      fill="none"
      stroke="#F7941D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className="our-group-connector our-group-connector--tl"
        d="M491.5 211.5 L384 129.6 L18 129.6"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="our-group-connector our-group-connector--tr"
        d="M788.5 211.5 L896 129.6 L1262 129.6"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="our-group-connector our-group-connector--bl"
        d="M491.5 508.5 L384 590.4 L18 590.4"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="our-group-connector our-group-connector--br"
        d="M788.5 508.5 L896 590.4 L1262 590.4"
        vectorEffect="non-scaling-stroke"
      />
    </g>
    <g fill="#F7941D">
      <polygon
        className="our-group-arrow our-group-arrow--tl"
        points="4,129.6 18,122.6 18,136.6"
      />
      <polygon
        className="our-group-arrow our-group-arrow--tr"
        points="1276,129.6 1262,122.6 1262,136.6"
      />
      <polygon
        className="our-group-arrow our-group-arrow--bl"
        points="4,590.4 18,583.4 18,597.4"
      />
      <polygon
        className="our-group-arrow our-group-arrow--br"
        points="1276,590.4 1262,583.4 1262,597.4"
      />
    </g>
  </svg>
);

const CompactDiagram = () => (
  <svg
    className="our-group-compact-art"
    viewBox="0 0 520 520"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false"
  >
    <image
      href="/our-group-world-map.svg"
      x="20"
      y="140"
      width="480"
      height="240"
      preserveAspectRatio="xMidYMid meet"
    />
    <circle
      className="our-group-compact-circle"
      cx="260"
      cy="260"
      r="205"
      fill="none"
      stroke="#F7941D"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const GroupStructure = () => {
  const [active, setActive] = useState(null);
  const stageRef = useRef(null);

  const handleStageMove = (event) => {
    const stage = event.currentTarget;
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    stage.style.setProperty('--mx', `${x}px`);
    stage.style.setProperty('--my', `${y}px`);
    stage.style.setProperty('--tilt-x', `${(x / rect.width - 0.5) * 2}`);
    stage.style.setProperty('--tilt-y', `${(y / rect.height - 0.5) * 2}`);
  };

  const handleStageLeave = () => {
    setActive(null);
    const stage = stageRef.current;
    if (stage) {
      stage.style.setProperty('--tilt-x', '0');
      stage.style.setProperty('--tilt-y', '0');
    }
  };

  const activate = (company) => () => setActive(company.position);
  const deactivate = () => setActive(null);

  return (
    <section
      aria-labelledby="our-group-heading"
      className="our-group-section"
    >
      <div className="our-group-container">
        <div className="our-group-header">
          <span className="our-group-eyebrow">OUR GROUP</span>
          <h2 id="our-group-heading" className="our-group-heading">
            One group. Four specialist companies.
          </h2>
          <p className="our-group-subtext">
            A connected family of businesses working together to support every
            stage of your journey — from hiring to growth.
          </p>
        </div>

        {/* Desktop: world-map diagram with cards in the four corners */}
        <div className="our-group-desktop">
          <div
            ref={stageRef}
            className="our-group-stage"
            data-active={active || undefined}
            onMouseMove={handleStageMove}
            onMouseLeave={handleStageLeave}
          >
            <div className="our-group-spotlight" aria-hidden="true" />
            <DesktopDiagram />

            <div className="our-group-center">
              <CenterCard />
            </div>

            {companies.map((company) => (
              <div
                key={company.slug}
                className={`our-group-slot our-group-slot--${company.position}`}
              >
                <GroupCard
                  company={company}
                  onActivate={activate(company)}
                  onDeactivate={deactivate}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet / mobile: centre card first, then the four cards */}
        <div
          className="our-group-compact"
          data-active={active || undefined}
        >
          <div className="our-group-compact-hero">
            <CompactDiagram />
            <div className="our-group-compact-center">
              <CenterCard />
            </div>
          </div>

          <div className="our-group-compact-grid">
            {companies.map((company) => (
              <GroupCard
                key={company.slug}
                company={company}
                onActivate={activate(company)}
                onDeactivate={deactivate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupStructure;
