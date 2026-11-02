/**
 * site.js — All static site content for e2e World Group.
 * Edit text here; the UI reads from these exports.
 */

import images from './images';

/* ──────────────────── Company Info ──────────────────── */
export const site = {
  url: 'https://www.e2eworld.co.uk',
  defaultTitle:
    'e2e World Group | Recruitment, HR, IT, Immigration & Cyber Solutions',
  defaultDescription:
    'e2e World Group delivers end-to-end recruitment, HR, IT, immigration, cyber security and digital solutions from its UK head office in Birmingham.',
  ogImage: '/og-image.png',
  themeColor: '#0B1F3A',
};

export const company = {
  name: 'e2e World Group',
  shortName: 'e2e World',
  tagline: 'End-to-End Solutions. Worldwide Impact.',
  founded: 2007,
  mission:
    'Empower businesses with innovative strategies, workforce solutions, and cutting-edge technology, ensuring sustainable growth in a competitive marketplace.',
  vision:
    'To provide comprehensive talent and management solutions to local businesses in the UK, helping them thrive in an ever-evolving global economy.',
  description:
    'Since 2007, e2e World Group has been a trusted partner for businesses seeking recruitment, HR, IT, immigration and cybersecurity solutions. With a UK Head Office in Birmingham and a global footprint spanning the Middle East, South East Asia and Europe, we deliver end-to-end services that drive results.',
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
  'General Enquiry',
  'Recruitment & HR',
  'IT Hiring',
  'Immigration',
  'Cyber & Digital',
];

/* ──────────────────── Navigation ──────────────────── */
export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Ventures', path: '/ventures' },
  { label: 'Get in Touch', path: '/contact' },
];

/* ──────────────────── Core Values ──────────────────── */
export const coreValues = [
  {
    title: 'Integrity',
    description: 'Transparency and ethical practices are at the heart of every engagement we undertake.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and forward-thinking strategies to keep our clients ahead of the curve.',
    icon: 'Lightbulb',
  },
  {
    title: 'Excellence',
    description: 'We set the highest standards, delivering measurable outcomes that exceed expectations.',
    icon: 'Trophy',
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships, working alongside our clients as true strategic partners.',
    icon: 'Handshake',
  },
  {
    title: 'Compliance',
    description: 'We operate within regulatory frameworks, including IAA-approved immigration advisory and right-to-work compliance support.',
    icon: 'Scale',
  },
  {
    title: 'Growth',
    description: 'We help businesses scale with workforce, technology and digital solutions built for sustainable growth.',
    icon: 'TrendingUp',
  },
];

/* ──────────────────── Global Regions ──────────────────── */
export const globalRegions = [
  'United Kingdom',
  'Europe',
  'Middle East',
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
  // TODO: client to confirm — placeholder milestones below
  {
    year: 'TBC',
    title: 'Group expands internationally',
    description: 'Placeholder milestone — details to be confirmed by the client.',
    placeholder: true,
  },
  {
    year: 'TBC',
    title: 'New divisions launched',
    description: 'Placeholder milestone — details to be confirmed by the client.',
    placeholder: true,
  },
  {
    year: 'TBC',
    title: 'Continued global growth',
    description: 'Placeholder milestone — details to be confirmed by the client.',
    placeholder: true,
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
  headline: 'End-to-End Solutions for a',
  headlineHighlight: 'Connected World',
  subtitle:
    'Recruitment · HR · IT · Immigration · Cyber Security — all under one roof. Since 2007, e2e World Group has been empowering UK businesses with the talent, technology, and compliance support they need to thrive globally.',
  primaryCta: { label: 'Explore Our Ventures', path: '/ventures' },
  secondaryCta: { label: 'Contact Us', path: '/contact' },
  image: images.hero,
};


