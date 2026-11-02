/**
 * home.js — Content specific to the Home page.
 * Keep copy factual and aligned with site.js / ventures.js.
 */

/* Rotating hero specialties */
export const rotatingWords = [
  'Recruitment',
  'IT Consulting',
  'Immigration',
  'Cyber Security',
];

/* Slim trust strip beneath the hero */
export const trustPoints = [
  { icon: 'Calendar', label: 'Since 2007' },
  {
    icon: 'Globe2',
    label: 'UK • Europe • Middle East • South East Asia • South Asia',
  },
  { icon: 'ShieldCheck', label: 'IAA Approved Immigration Advisory' },
];

/* Floating glass cards in the hero */
export const heroHighlights = [
  {
    icon: 'Users',
    title: '4 specialist ventures',
    text: 'Recruitment, IT, immigration and cyber security',
  },
  {
    icon: 'Globe2',
    title: '5 global regions',
    text: 'UK, Europe, Middle East, South East Asia and South Asia',
  },
  {
    icon: 'ShieldCheck',
    title: 'IAA approved',
    text: 'Immigration advisory and compliance',
  },
];

/* Why choose e2e World Group */
export const whyChooseUs = [
  {
    icon: 'Layers',
    title: 'End-to-end solutions',
    description:
      'Recruitment, HR, IT, immigration, cyber security and digital services from one connected group.',
  },
  {
    icon: 'Globe2',
    title: 'Global reach',
    description:
      'A footprint spanning the UK, Europe, the Middle East, South East Asia and South Asia.',
  },
  {
    icon: 'Briefcase',
    title: 'Specialist sectors',
    description:
      'Purpose-built ventures cover recruitment, technical hiring, immigration, cyber security and digital growth.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Compliance-led',
    description:
      'IAA (formerly OISC) approved immigration advisory with sponsorship licence and right-to-work compliance support.',
  },
  {
    icon: 'Settings2',
    title: 'Tailored support',
    description:
      'Workforce planning, IT consulting and managed services aligned to your business objectives.',
  },
  {
    icon: 'Cpu',
    title: 'Technology-driven',
    description:
      'Workforce management solutions, cybersecurity, web development and digital marketing under one roof.',
  },
];

/* Tabs for the services section — slugs map to ventures.js */
export const serviceTabs = [
  { id: 'recruitment', label: 'Recruitment & HR', slug: 'e2e-hrc', icon: 'Users' },
  {
    id: 'it',
    label: 'IT & Technical Hiring',
    slug: 'e2e-infosys',
    icon: 'Monitor',
  },
  { id: 'immigration', label: 'Immigration', slug: 'elite-pic', icon: 'Globe' },
  {
    id: 'cyber',
    label: 'Cyber & Digital',
    slug: 'e2e-cyber-solutions',
    icon: 'Shield',
  },
];

/* Approximate pin positions over the stylised world map */
export const locations = [
  { name: 'United Kingdom', left: '48%', top: '27%', label: 'top' },
  { name: 'Europe', left: '53%', top: '34%', label: 'bottom' },
  { name: 'Middle East', left: '61%', top: '45%', label: 'bottom' },
  { name: 'South Asia', left: '69%', top: '49%', label: 'top' },
  { name: 'South East Asia', left: '76%', top: '57%', label: 'bottom' },
];
