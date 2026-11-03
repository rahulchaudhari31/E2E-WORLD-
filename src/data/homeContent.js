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
    'Four specialist companies, one connected group. Hire, mobilise and grow your business with us.',
  cta: { label: 'Explore Our Companies', href: '#companies' },
  finder: {
    eyebrow: 'FIND YOUR SOLUTION',
    title: 'What do you need today?',
    recommendLabel: 'WE RECOMMEND',
    options: [
      {
        id: 'hire',
        label: 'Hire talent',
        company: 'e2e HRC',
        description: 'Permanent, temporary and contract recruitment across the UK.',
        url: 'https://www.e2ehrc.co.uk/',
      },
      {
        id: 'it',
        label: 'IT & specialist hiring',
        company: 'e2e Infosys',
        description: 'Specialist technical hiring, IT consulting and workforce solutions.',
        url: 'https://www.e2einfosys.com/',
      },
      {
        id: 'visas',
        label: 'Visas & sponsorship',
        company: 'elite PiC',
        description: 'IAA-approved sponsorship licence, visa and compliance support.',
        url: 'https://www.elitepic.co.uk/',
      },
      {
        id: 'web',
        label: 'Website & marketing',
        company: 'e2e Cyber Solutions',
        description: 'Web development, digital marketing and cybersecurity.',
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
  'Engineering',
  'Automotive',
  'Telecom',
  'Aerospace',
];

export const companiesSection = {
  eyebrow: 'OUR COMPANIES',
  heading: {
    before: 'One group. ',
    accent: 'Four',
    after: ' ways to grow.',
  },
  subtext:
    'Each company is a specialist in its field. Together they cover your whole journey.',
  companies: [
    {
      name: 'e2e HRC',
      slug: 'e2e-hrc',
      url: 'https://www.e2ehrc.co.uk/',
      description:
        'Recruitment and HR specialists connecting employers with the right people, from permanent hires to global talent.',
      tags: ['Recruitment', 'HR', 'Global Talent'],
    },
    {
      name: 'e2e Infosys',
      slug: 'e2e-infosys',
      url: 'https://www.e2einfosys.com/',
      description:
        'Technical hiring, IT consulting and workforce management for banking, finance, telecom and more.',
      tags: ['IT Consulting', 'RPO', 'Workforce'],
    },
    {
      name: 'elite PiC',
      slug: 'elite-pic',
      url: 'https://www.elitepic.co.uk/',
      description:
        'IAA-approved immigration advisory handling sponsor licences, visas and compliance for a global workforce.',
      tags: ['Sponsor Licences', 'Visas', 'Compliance'],
    },
    {
      name: 'e2e Cyber Solutions',
      slug: 'e2e-cyber-solutions',
      url: 'https://www.e2ecybersolutions.com/',
      description:
        'Web development, digital marketing and cybersecurity that help brands grow safely online.',
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
        'A one-stop recruitment and HR partner for employers and employees, covering permanent, temporary and contract hiring with ongoing HR support.',
      features: [
        'Permanent recruitment',
        'Temporary and contract staffing',
        'HR support',
        'Global talent sourcing',
      ],
    },
    {
      id: 'infosys',
      label: 'e2e Infosys',
      company: 'e2e Infosys',
      url: 'https://www.e2einfosys.com/',
      description:
        'Specialist hiring and IT workforce solutions for technical roles across IT, banking, finance and telecom, aligned to your business objectives.',
      features: [
        'IT consulting',
        'Workforce Management Solutions',
        'Recruitment Process Outsourcing',
        'Technical hiring',
      ],
    },
    {
      id: 'elite-pic',
      label: 'elite PiC',
      company: 'elite PiC',
      url: 'https://www.elitepic.co.uk/',
      description:
        'An IAA-approved immigration advisory simplifying sponsorship licences, visa applications and compliance for global workforce mobility.',
      features: [
        'Sponsor licences',
        'Visa applications',
        'Compliance support',
        'Immigration advice',
      ],
    },
    {
      id: 'cyber',
      label: 'e2e Cyber Solutions',
      company: 'e2e Cyber Solutions',
      url: 'https://www.e2ecybersolutions.com/',
      description:
        'Integrated digital services that protect your assets and strengthen your online presence, from cybersecurity to bespoke web development.',
      features: [
        'Web development',
        'Digital marketing',
        'Cybersecurity',
        'Brand growth',
      ],
    },
  ],
};

export const journeySection = {
  eyebrow: 'BETTER TOGETHER',
  heading: {
    before: 'One client journey, ',
    accent: 'four',
    after: ' specialists.',
  },
  subtext: 'Tap a step to see how the group supports you.',
  steps: [
    {
      number: '01',
      label: 'Hire',
      companies: 'E2E HRC & E2E INFOSYS',
      title: 'Find the right people, fast.',
      description:
        'We map the market, shortlist specialist talent and place permanent, temporary or contract professionals who fit your business.',
    },
    {
      number: '02',
      label: 'Mobilise',
      companies: 'ELITE PIC',
      title: 'Get international talent ready to work.',
      description:
        'Our IAA-approved team handles sponsor licences, visa applications and compliance so your new hires can start with confidence.',
    },
    {
      number: '03',
      label: 'Manage',
      companies: 'E2E HRC & E2E INFOSYS',
      title: 'Keep your workforce running smoothly.',
      description:
        'From HR support and onboarding to workforce management and IT consulting, we help you manage people and technology day to day.',
    },
    {
      number: '04',
      label: 'Grow',
      companies: 'E2E CYBER SOLUTIONS',
      title: 'Build a stronger digital presence.',
      description:
        'Web development, digital marketing and cybersecurity work together to help you reach new customers and protect your brand.',
    },
  ],
};

export const aboutSection = {
  eyebrow: 'ABOUT E2E WORLD GROUP',
  heading: {
    before: 'Built in Birmingham. ',
    accent: 'Serving the world.',
  },
  paragraph:
    'We set out in 2007 to give UK businesses complete talent and management solutions. Today our four companies empower organisations with workforce strategy, specialist expertise and modern technology.',
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
    { name: 'South East Asia' },
    { name: 'Europe' },
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
      question: 'Do you work with businesses outside the UK?',
      answer:
        'Yes. The group supports clients across the United Kingdom, Middle East, South East Asia, Europe and South Asia.',
    },
    {
      question: 'Can the companies work together on one project?',
      answer:
        'Yes. The four companies are part of one group and regularly work together, for example combining recruitment, immigration support and IT services on a single project.',
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
    before: "Let's start something ",
    accent: 'great.',
  },
  subtext:
    'Tell us what you need and we will route you to the right team.',
  interests: [
    { label: 'e2e HRC', subject: 'Recruitment & HR' },
    { label: 'e2e Infosys', subject: 'IT Hiring' },
    { label: 'elite PiC', subject: 'Immigration' },
    { label: 'e2e Cyber Solutions', subject: 'Cyber & Digital' },
  ],
};

export const footerContent = {
  tagline: 'Talent and management solutions for a connected world.',
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
