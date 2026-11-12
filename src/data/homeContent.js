/**
 * homeContent.js — Copy and link data for the redesigned home page.
 * All display text lives here so components stay presentational.
 */

export const heroContent = {
  eyebrow: 'SINCE 2007 · BIRMINGHAM, UK',
  headline: [
    { text: 'Talent.', color: 'white' },
    { text: 'Technology.', color: 'white' },
    { text: 'Compliance.', color: 'orange' },
    { text: 'Growth.', color: 'white' },
  ],
  subtext:
    'e2e World Group brings four specialist companies together to give UK businesses a true one-stop solution, from hiring the right people to bringing them to the UK and growing your brand.',
  cta: { label: 'Explore Our Companies', href: '#companies' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
  finder: {
    eyebrow: 'FIND YOUR SOLUTION',
    title: 'What do you need today?',
    recommendLabel: 'WE RECOMMEND',
    options: [
      {
        id: 'hire',
        label: 'Hire Talent',
        company: 'e2e HRC',
        description:
          'End-to-end recruitment and HR services for multiple sectors across the UK.',
        url: 'https://www.e2ehrc.co.uk/',
      },
      {
        id: 'it',
        label: 'IT Hiring & Consultancy',
        company: 'e2e Infosys',
        description:
          'Specialist technical hiring, IT consulting and workforce management solutions.',
        url: 'https://www.e2einfosys.com/',
      },
      {
        id: 'visas',
        label: 'Visas & Immigration Advice',
        company: 'elite PiC',
        description:
          'IAA (formerly OISC) approved sponsorship licence, visa and compliance support.',
        url: 'https://www.elitepic.co.uk/',
      },
      {
        id: 'web',
        label: 'Digital & Tech Solutions',
        company: 'e2e Cyber Solutions',
        description:
          'Digital marketing, web development and cybersecurity that grow your brand.',
        url: 'https://www.e2ecybersolutions.com/',
      },
    ],
  },
};

export const marqueeItems = [
  'IT',
  'Banking & Finance',
  'Insurance',
  'Retail',
  'Engineering & Manufacturing',
  'Hospitality',
  'Healthcare',
  'Aerospace',
];

export const companiesSection = {
  tagline: 'One Stop Solution - Manpower to Marketing',
  eyebrow: 'OUR COMPANIES',
  heading: {
    before: 'One group. ',
    accent: 'Four',
    after: ' specialist companies.',
  },
  subtext:
    'e2e World Group brings four specialist companies together to give UK businesses a true one-stop solution.',
  companies: [
    {
      name: 'e2e HRC',
      slug: 'e2e-hrc',
      url: 'https://www.e2ehrc.co.uk/',
      description:
        'The cornerstone of the group, providing end-to-end recruitment and HR services for multiple sectors across the UK, with a presence in the Middle East, South East Asia and the UK.',
      tags: ['Recruitment', 'HR', 'Global Talent'],
    },
    {
      name: 'e2e Infosys',
      slug: 'e2e-infosys',
      url: 'https://www.e2einfosys.com/',
      description:
        'Hiring solutions for technical roles in IT, banking, finance, telecom and more, with a presence in the UK, Europe and South Asia.',
      tags: ['IT Consulting', 'RPO', 'Workforce'],
    },
    {
      name: 'elite PiC',
      slug: 'elite-pic',
      url: 'https://www.elitepic.co.uk/',
      description:
        'An IAA (formerly OISC) approved advisory company specialising in immigration consultancy, sponsorship licences, visa applications and compliance.',
      tags: ['Sponsor Licences', 'Visas', 'Compliance'],
    },
    {
      name: 'e2e Cyber Solutions',
      slug: 'e2e-cyber-solutions',
      url: 'https://www.e2ecybersolutions.com/',
      description:
        'Modern digital marketing and cybersecurity solutions that help clients protect their assets and grow their digital presence.',
      tags: ['Web', 'Marketing', 'Cybersecurity'],
    },
  ],
};

export const servicesSection = {
  eyebrow: 'SERVICES',
  heading: {
    before: 'Explore what each ',
    accent: 'company',
    after: ' does.',
  },
  tabs: [
    {
      id: 'hrc',
      label: 'e2e HRC',
      company: 'e2e HRC',
      url: 'https://www.e2ehrc.co.uk/',
      description:
        'e2e HRC is the cornerstone of the group, providing end-to-end recruitment and HR services for multiple sectors across the UK. With a presence in the Middle East, South East Asia and the UK, it is a trusted partner for organisations seeking global talent solutions.',
      features: [
        'Recruitment',
        'HR services',
        'Global talent sourcing',
        'Tailored support',
      ],
    },
    {
      id: 'infosys',
      label: 'e2e Infosys',
      company: 'e2e Infosys',
      url: 'https://www.e2einfosys.com/',
      description:
        'e2e Infosys provides hiring solutions for technical roles in sectors such as IT, banking, finance, telecom and more. With a presence in the UK, Europe and South Asia, it helps businesses compete where innovation and specialisation drive success.',
      features: [
        'IT consulting',
        'Workforce management solutions',
        'Recruitment Process Outsourcing (RPO)',
        'Technical hiring',
      ],
    },
    {
      id: 'elite-pic',
      label: 'elite PiC',
      company: 'elite PiC',
      url: 'https://www.elitepic.co.uk/',
      description:
        'elite PiC is an IAA (formerly OISC) approved advisory company specialising in immigration consultancy. It supports businesses that need sponsorship licences, visa applications and compliance support.',
      features: [
        'Sponsor licences',
        'Visa applications',
        'Compliance support',
        'Global workforce mobility',
      ],
    },
    {
      id: 'cyber',
      label: 'e2e Cyber Solutions',
      company: 'e2e Cyber Solutions',
      url: 'https://www.e2ecybersolutions.com/',
      description:
        'e2e Cyber Solutions provides modern digital marketing and cybersecurity solutions, helping clients protect their assets and grow their digital presence through result-driven marketing and comprehensive web development.',
      features: [
        'Digital marketing',
        'Web development',
        'Cybersecurity',
        'Brand growth',
      ],
    },
  ],
};

export const journeySection = {
  eyebrow: 'HOW THE GROUP WORKS TOGETHER',
  heading: {
    before: 'One group, ',
    accent: 'one',
    after: ' point of contact.',
  },
  subtext: 'No gaps between services — from hiring to growth.',
  steps: [
    {
      number: '01',
      label: 'Hire',
      companies: 'E2E HRC & E2E INFOSYS',
      title: 'Hire the right people.',
      description:
        'e2e HRC and e2e Infosys source and shortlist the right people for general and specialist technical roles.',
    },
    {
      number: '02',
      label: 'Mobilise',
      companies: 'ELITE PIC',
      title: 'Bring overseas talent to the UK.',
      description:
        'elite PiC manages sponsorship licences, visa applications and compliance so overseas talent can join your team.',
    },
    {
      number: '03',
      label: 'Manage',
      companies: 'E2E INFOSYS',
      title: 'Keep your workforce running.',
      description:
        'e2e Infosys supports payroll, workforce management and IT consulting.',
    },
    {
      number: '04',
      label: 'Grow',
      companies: 'E2E CYBER SOLUTIONS',
      title: 'Grow your brand online.',
      description:
        'e2e Cyber Solutions builds your website, marketing and brand. One group, one point of contact, no gaps between services.',
    },
  ],
};

export const aboutSection = {
  eyebrow: 'E2E WORLD GROUP',
  heading: {
    before: 'Built in Birmingham. ',
    accent: 'Serving the world.',
  },
  paragraph:
    'Founded in 2007 and headquartered in Birmingham, e2e World Group brings four specialist companies together to give UK businesses comprehensive talent and management solutions. Today, our sister companies support organisations and skilled professionals at every step.',
  cta: { label: 'Our Story', to: '/about' },
  stats: [
    { value: 2007, label: 'Year founded', tone: 'orange' },
    { value: 4, label: 'Specialist companies', tone: 'blue' },
    { value: 5, label: 'Regions served', tone: 'lime' },
    { value: 'IAA·ISO', label: 'Accredited', tone: 'navy' },
  ],
};

export const globalPresenceSection = {
  eyebrow: 'GLOBAL PRESENCE',
  heading: {
    before: 'Local expertise, ',
    accent: 'international reach.',
  },
  regions: [
    { name: 'United Kingdom', suffix: '(HQ)' },
    { name: 'Middle East' },
    { name: 'Europe' },
    { name: 'South East Asia' },
    { name: 'South Asia' },
  ],
};

export const faqSection = {
  eyebrow: 'FAQ',
  heading: {
    before: 'Quick ',
    accent: 'answers.',
  },
  items: [
    {
      question: 'Which company should I contact first?',
      answer:
        'Start with the team closest to your need: e2e HRC for recruitment and HR, e2e Infosys for IT and technical hiring, elite PiC for visas and sponsorship, or e2e Cyber Solutions for web and marketing. If you are unsure, contact us and we will route you to the right team.',
    },
    {
      question: 'Can the companies work together on one project?',
      answer:
        'Yes. The four sister companies are part of one group and regularly work together, for example combining recruitment, immigration support and digital services on a single project.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Call +44 (0) 121 778 2400, email info@e2eworld.co.uk or send a message through our contact form. Tell us what you need and we will connect you with the right specialist.',
    },
  ],
};

export const contactSection = {
  eyebrow: 'CONTACT US',
  heading: {
    before: 'Not sure which service ',
    accent: 'you need?',
  },
  subtext:
    'Tell us what you are working on and we will connect you with the right team.',
  interests: [
    { label: 'e2e HRC', subject: 'e2e HRC' },
    { label: 'e2e Infosys', subject: 'e2e Infosys' },
    { label: 'elite PiC', subject: 'elite PiC' },
    { label: 'e2e Cyber Solutions', subject: 'e2e Cyber Solutions' },
    { label: 'Not sure', subject: 'Not sure' },
  ],
};

export const footerContent = {
  tagline:
    'Talent and management solutions for a connected world. Recruitment, immigration, IT and digital growth from one group.',
  groupLinks: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  companyLinks: [
    { label: 'e2e HRC', url: 'https://www.e2ehrc.co.uk/' },
    { label: 'e2e Infosys', url: 'https://www.e2einfosys.com/' },
    { label: 'elite PiC', url: 'https://www.elitepic.co.uk/' },
    { label: 'e2e Cyber Solutions', url: 'https://www.e2ecybersolutions.com/' },
  ],
  connectLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/e2e-world-group/',
      external: true,
    },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
  ],
};

export const navigationContent = {
  links: [
    { label: 'Home', to: '/', exact: true },
    { label: 'About Us', to: '/about' },
    { label: 'Our Companies', to: '/ventures', dropdown: true },
    { label: 'Contact', to: '/contact' },
  ],
  cta: { label: 'Get in Touch', to: '/contact' },
};
