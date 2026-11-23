/**
 * site.js — All static site content for e2e World Group.
 * Edit text here; the UI reads from these exports.
 */

import images from './images';

/* ──────────────────── Company Info ──────────────────── */
export const site = {
  url: 'https://www.e2eworld.co.uk',
  defaultTitle:
    'e2e World Group | Talent, Technology, Compliance & Growth',
  defaultDescription:
    'e2e World Group brings four specialist companies together to give UK businesses a true one-stop solution for recruitment, HR, IT, immigration and digital growth from its Birmingham head office.',
  ogImage: '/og-image.png',
  themeColor: '#092A49',
};

export const company = {
  name: 'e2e World Group',
  shortName: 'e2e World',
  tagline: 'Talent. Technology. Compliance. Growth.',
  founded: 2007,
  mission:
    'To empower businesses with innovative strategies, workforce solutions and cutting-edge technology that deliver sustainable growth.',
  vision:
    "To be the UK's most trusted one-stop partner for talent, workforce mobility and digital growth.",
  belief:
    'Bridging the talent gap requires more than processes. It demands holistic solutions that support skilled professionals throughout their entire journey.',
  description:
    'Founded in 2007 and headquartered in Birmingham, e2e World Group is a group of four specialist companies providing talent, workforce, immigration and digital solutions to UK businesses and skilled professionals. Our global network stretches across the UK, the Middle East, Europe, South East Asia and South Asia.',
};

/* ──────────────────── Contact Details ──────────────────── */
export const contact = {
  address: {
    line1: 'UK Head Office',
    line2: 'Unit 2, 1204B Stratford Road',
    line3: 'Hall Green, Birmingham',
    postcode: 'B28 8HN',
    country: 'United Kingdom',
    full: 'Unit 2, 1204B Stratford Road, Hall Green, Birmingham, B28 8HN, UK',
  },
  phone: '+44 (0) 121 778 2400',
  email: 'info@e2eworld.co.uk',
  /* Placeholder — client to confirm working hours. */
  hours: {
    days: 'Monday – Friday',
    time: '9am – 6pm',
    note: 'Weekend enquiries will be answered on the next business day.',
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=1204B%20Stratford%20Rd%2C%20Hall%20Green%2C%20Birmingham%20B28%208HN&output=embed',
  social: {
    linkedin: 'https://www.linkedin.com/company/e2e-world-group-uk/',
    /* Placeholder — replace with the official Facebook page URL when available. */
    facebook: 'https://www.facebook.com/',
  },
};

/* ──────────────────── Contact Subjects ──────────────────── */
export const contactSubjects = [
  'e2e HRC',
  'e2e Infosys',
  'elite PiC',
  'e2e Cyber Solutions',
  'Not sure',
];

/* ──────────────────── Navigation ──────────────────── */
export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Companies', path: '/ventures' },
  { label: 'Get in Touch', path: '/contact' },
];

/* ──────────────────── Core Values ──────────────────── */
export const coreValues = [
  {
    title: 'Integrity',
    description:
      'Honest, transparent advice and fair dealing with clients and candidates.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Excellence',
    description: 'Getting the job done right, the first time, each time.',
    icon: 'Trophy',
  },
  {
    title: 'Partnership',
    description: 'Long-term relationships rather than one-off transactions.',
    icon: 'Handshake',
  },
  {
    title: 'Innovation',
    description:
      'Modern tools and fresh thinking to solve evolving workforce challenges.',
    icon: 'Lightbulb',
  },
  {
    title: 'Global outlook',
    description:
      'Local UK expertise backed by an international network.',
    icon: 'Globe2',
  },
];

/* ──────────────────── Global Regions ──────────────────── */
export const globalRegions = [
  'United Kingdom',
  'Middle East',
  'Europe',
  'South East Asia',
  'South Asia',
];

/* ──────────────────── Timeline ──────────────────── */
export const timeline = [
  {
    year: '2007',
    title: 'Where it all began',
    description:
      'Founded with a vision of connecting UK businesses with international skilled professionals, backed by end-to-end immigration support.',
    placeholder: false,
  },
  {
    year: '2010',
    title: 'Expanding beyond borders',
    description:
      'Rapid growth in international recruitment led to our expansion into the UAE and South Asia, establishing a wider global presence.',
    placeholder: false,
  },
  {
    year: '2013',
    title: 'Two specialist businesses. One vision.',
    description:
      'We established two dedicated companies: e2e HRC for non-technical recruitment and e2e Infosys for technical recruitment and Recruitment Process Outsourcing (RPO).',
    placeholder: false,
  },
  {
    year: '2016',
    title: 'Immigration expertise takes shape',
    description:
      'Immigration services evolved into a dedicated business with the establishment of Elite PiC, registered with the Immigration Advice Authority (IAA).',
    placeholder: false,
  },
  {
    year: '2018',
    title: 'Building a complete growth partnership',
    description:
      'e2e Cyber Solutions was established, bringing digital marketing, web development, cybersecurity and CRM, BI Solutions together to become a one-stop growth partner for businesses.',
    placeholder: false,
  },
];

/* ──────────────────── Team (placeholder) ──────────────────── */
// TODO: client to confirm — replace placeholder names, titles, portraits and LinkedIn URLs.
export const teamMembers = [
  {
    name: 'Team Member 01',
    title: 'Role Title — TBC',
    image: images.portrait1,
    linkedin: contact.social.linkedin,
    placeholder: true,
  },
  {
    name: 'Team Member 02',
    title: 'Role Title — TBC',
    image: images.portrait2,
    linkedin: contact.social.linkedin,
    placeholder: true,
  },
  {
    name: 'Team Member 03',
    title: 'Role Title — TBC',
    image: images.portrait3,
    linkedin: contact.social.linkedin,
    placeholder: true,
  },
  {
    name: 'Team Member 04',
    title: 'Role Title — TBC',
    image: images.portrait4,
    linkedin: contact.social.linkedin,
    placeholder: true,
  },
];

/* ──────────────────── Hero Section ──────────────────── */
export const hero = {
  headline: 'Talent. Technology. Compliance.',
  headlineHighlight: 'Growth.',
  subtitle:
    'e2e World Group brings four specialist companies together to give UK businesses a true one-stop solution, from hiring the right people to bringing them to the UK and growing your brand.',
  primaryCta: { label: 'Explore Our Companies', path: '/ventures' },
  secondaryCta: { label: 'Contact Us', path: '/contact' },
  image: images.hero,
};


