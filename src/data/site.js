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
    time: '9:00 – 17:30',
    note: 'Weekend enquiries will be answered on the next business day.',
  },
  mapEmbedUrl:
    'https://www.google.com/maps?q=1204B%20Stratford%20Rd%2C%20Hall%20Green%2C%20Birmingham%20B28%208HN&output=embed',
  social: {
    linkedin: 'https://www.linkedin.com/company/e2e-world-group/',
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
    title: 'e2e World Group founded',
    description:
      'Established with a vision to provide comprehensive talent and management solutions to local businesses in the UK.',
    placeholder: false,
  },
  {
    year: 'Growth',
    title: 'Expansion beyond the UK and the Middle East',
    description:
      'The group expanded into Europe and South East Asia, helping to address UK talent shortages by bringing skilled professionals from around the world.',
    placeholder: false,
  },
  {
    year: 'Today',
    title: 'Four specialist sister companies',
    description:
      'The group has grown into four distinct companies — e2e HRC, elite PiC, e2e Infosys and e2e Cyber Solutions — each covering a different part of the talent and business landscape.',
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


