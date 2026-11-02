/**
 * ventures.js — Full data for each e2e World Group venture.
 * Edit content here; the UI reads from these exports.
 */

import images from './images';

const ventures = [
  /* ─── 1. e2e HRC ───────────────────────────────────── */
  {
    slug: 'e2e-hrc',
    name: 'e2e HRC',
    tagline: 'End-to-End Recruitment & HR Solutions',
    shortDescription:
      'The cornerstone of the group — a one-stop solution for employers and employees, delivering end-to-end Recruitment & HR services across multiple UK sectors.',
    longDescription:
      'e2e HRC is the flagship venture of the e2e World Group, offering comprehensive recruitment and human resources services across multiple UK sectors. With a global presence spanning the Middle East, South East Asia and the United Kingdom, we connect top talent with leading employers. Our end-to-end approach means we handle everything from workforce planning and talent acquisition to onboarding and ongoing HR support, making us the ultimate one-stop solution for employers and employees alike.',
    services: [
      'Permanent & Temporary Recruitment',
      'Executive Search & Headhunting',
      'HR Outsourcing & Advisory',
      'Workforce Planning',
      'Onboarding & Compliance',
      'Talent Mapping & Benchmarking',
    ],
    regions: ['United Kingdom', 'Middle East', 'South East Asia'],
    color: '#2563EB',
    icon: 'Users',
    image: images.recruitment,
    externalUrl: 'https://www.e2ehrc.co.uk/',
  },

  /* ─── 2. e2e Infosys ──────────────────────────────── */
  {
    slug: 'e2e-infosys',
    name: 'e2e Infosys',
    tagline: 'Technical Hiring & IT Workforce Solutions',
    shortDescription:
      'Specialist hiring solutions for technical roles in IT, Banking, Finance, Telecom and more — with a presence across the UK, Europe, and South Asia.',
    longDescription:
      'e2e Infosys provides specialist hiring solutions for technical roles across IT, Banking, Finance, Telecom and more. With a presence in the UK, Europe, and South Asia, we deliver tailored IT consulting, Workforce Management Solutions, and Recruitment Process Outsourcing (RPO) that align with your business objectives. Our deep domain expertise and extensive talent network ensure you get the right people, in the right roles, at the right time.',
    services: [
      'IT Consulting',
      'Workforce Management Solutions',
      'Recruitment Process Outsourcing (RPO)',
      'Contract & Permanent IT Staffing',
      'Vendor Management',
      'Managed Services',
    ],
    regions: ['United Kingdom', 'Europe', 'South Asia'],
    color: '#14B8A6',
    icon: 'Monitor',
    image: images.itConsulting,
    externalUrl: 'https://www.e2einfosys.com/',
  },

  /* ─── 3. elite PiC ────────────────────────────────── */
  {
    slug: 'elite-pic',
    name: 'elite PiC',
    tagline: 'Immigration Advisory & Compliance',
    shortDescription:
      'IAA (formerly OISC) approved immigration advisory — simplifying sponsorship licences, visa applications, and compliance for global workforce mobility.',
    longDescription:
      'elite PiC is an IAA (formerly OISC) approved immigration advisory firm, specialising in sponsorship licences, visa applications, and compliance support. We simplify the complexities of global workforce mobility so your business can hire internationally with confidence. From initial licence applications through to ongoing compliance management, our experts ensure you stay ahead of regulatory changes while seamlessly integrating overseas talent into your workforce.',
    services: [
      'Sponsorship Licence Applications',
      'Visa Applications & Extensions',
      'Right-to-Work Compliance Audits',
      'Immigration Policy Advisory',
      'Global Mobility Consulting',
      'Sponsor Licence Management',
    ],
    regions: ['United Kingdom', 'Global'],
    color: '#F59E0B',
    icon: 'Globe',
    image: images.immigration,
    externalUrl: 'https://www.elitepic.co.uk/',
  },

  /* ─── 4. e2e Cyber Solutions ──────────────────────── */
  {
    slug: 'e2e-cyber-solutions',
    name: 'e2e Cyber Solutions',
    tagline: 'Digital Marketing, Cybersecurity & Web Development',
    shortDescription:
      'Protect your digital assets and amplify your online presence with our integrated digital marketing, cybersecurity, and web development services.',
    longDescription:
      'e2e Cyber Solutions delivers a holistic suite of digital services — from cybersecurity audits and threat monitoring to digital marketing and bespoke web development. We help businesses protect their assets, strengthen their digital infrastructure, and grow their online presence in an increasingly connected world. Whether you need penetration testing, SEO strategy, or a full website rebuild, our team brings technical depth and creative insight to every project.',
    services: [
      'Cybersecurity Audits & Assessments',
      'Penetration Testing',
      'Digital Marketing & SEO',
      'Web Design & Development',
      'Managed Security Services',
      'Brand Strategy & Social Media',
    ],
    regions: ['United Kingdom', 'Global'],
    color: '#EF4444',
    icon: 'Shield',
    image: images.cybersecurity,
    externalUrl: 'https://www.e2ecybersolutions.com/',
  },
];

export default ventures;
