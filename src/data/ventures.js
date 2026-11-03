/**
 * ventures.js — Full data for each e2e World Group company.
 * Edit content here; the UI reads from these exports.
 */

import images from './images';

const ventures = [
  /* ─── 1. e2e HRC ───────────────────────────────────── */
  {
    slug: 'e2e-hrc',
    name: 'e2e HRC',
    tagline: 'Connecting talent with opportunity.',
    shortDescription:
      'End-to-end recruitment and HR services for multiple sectors across the UK, backed by a global talent network.',
    longDescription:
      'e2e HRC is the cornerstone of e2e World Group. We provide end-to-end recruitment and HR services for organisations across multiple UK sectors. With a presence in the Middle East, South East Asia and the UK, we are a trusted partner for businesses looking for global talent solutions. As a comprehensive one-stop solution, we make sure both employers and employees receive tailored support at every stage of the recruitment process.',
    services: [
      'Recruitment — permanent, temporary and contract hiring',
      'HR services and advisory',
      'Global talent sourcing',
      'Tailored support for employers and candidates',
      'Onboarding and relocation support',
      'Workforce planning',
    ],
    process: [
      {
        title: 'Brief',
        description: 'We understand your needs and the roles you need to fill.',
      },
      {
        title: 'Source',
        description: 'We search our network and the wider market for talent.',
      },
      {
        title: 'Shortlist',
        description: 'Suitable candidates are assessed and presented to you.',
      },
      {
        title: 'Place',
        description: 'We support offer, onboarding and relocation.',
      },
    ],
    audiences: [
      {
        label: 'For employers',
        title: 'Hire the right people',
        description:
          'Tell us about your roles and we will source, assess and present suitable candidates, drawing on the group’s global network. When you need visa sponsorship for overseas hires, elite PiC can support you.',
        cta: { label: 'Hire Talent', to: '/contact' },
      },
      {
        label: 'For candidates',
        title: 'Find your next role in the UK',
        description:
          'We support professionals throughout the recruitment journey. For candidates relocating from overseas, our sister company elite PiC advises on visas and sponsorship.',
        cta: { label: 'Register Your CV', to: '/contact' },
      },
    ],
    regions: ['United Kingdom', 'Middle East', 'South East Asia'],
    color: '#1A75BB',
    icon: 'Users',
    image: images.recruitment,
    externalUrl: 'https://www.e2ehrc.co.uk/',
  },

  /* ─── 2. e2e Infosys ──────────────────────────────── */
  {
    slug: 'e2e-infosys',
    name: 'e2e Infosys',
    tagline: 'Navigating the new digital landscape.',
    shortDescription:
      'Specialist hiring, IT consulting and workforce solutions to power your digital transformation.',
    longDescription:
      'e2e Infosys is an international resource solutions, IT consulting and resource provider that enables clients to achieve their digital ambitions. We bring together our digital expertise, recruitment experience and deep domain knowledge from across the e2e World businesses. With a presence in the UK, Europe and South Asia, we help businesses excel in a competitive market where innovation and specialisation drive success. We pride ourselves on our experience and professional standing, and on getting the job done right, the first time, each time.',
    services: [
      'Talent Acquisition / Staffing',
      'IT Consulting and Business Solutions',
      'Leadership Hiring',
      'Payroll and Workforce Management',
      'Recruitment Process Outsourcing (RPO)',
      'Digital excellence',
    ],
    sectors: [
      'IT',
      'Banking and Finance',
      'Insurance',
      'Retail',
      'Engineering and Manufacturing',
      'Automotive',
      'Telecom',
      'Aerospace',
    ],
    whyChoose: [
      'Delivering digital excellence.',
      'Pioneering upcoming technologies.',
      'Sourcing resources for niche and rare skills.',
      'Consultants and experts who deliver the best recruitment solutions to clients and candidates.',
      'ISO certified.',
    ],
    audiences: [
      {
        label: 'For candidates',
        title: 'Find a job that matches your goals',
        description:
          'Submit your CV and it goes to an e2e Infosys recruitment consultant. Each CV goes through a stringent assessment, qualified CVs are shared with clients and added to our database, and our in-house talent pool is always reviewed first.',
        cta: { label: 'Upload Your CV', to: '/contact' },
      },
      {
        label: 'For employers',
        title: 'Request a callback',
        description:
          'Your requirements are evaluated and discussed with our recruitment consultants before we begin, so we can find the right people for your organisation.',
        cta: { label: 'Request a Callback', to: '/contact' },
      },
    ],
    contactInfo: {
      address: '1204B Stratford Road, Birmingham, B28 8HN, UK',
      email: 'info@e2einfosys.com',
      hours: 'Monday to Friday, 8am to 6pm',
    },
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
    tagline: 'Expert guidance through UK immigration.',
    shortDescription:
      'An IAA (formerly OISC) approved advisory company helping businesses and skilled professionals with visas, sponsorship and settlement.',
    longDescription:
      'elite PiC is the immigration and visa consultancy of e2e World Group. As an IAA (formerly OISC) approved advisory company, we specialise in immigration consultancy for businesses needing sponsorship licences, visa applications and compliance support. We simplify the intricate processes of global workforce mobility, so that businesses and skilled professionals can transition smoothly into UK organisations.',
    services: [
      'Sponsorship licences',
      'Visa applications for your workers',
      'Compliance support',
      'Visa applications for individuals',
      'Settlement support',
      'Expert advice at every step',
    ],
    process: [
      {
        title: 'Consultation',
        description: 'We assess your situation and understand your goals.',
      },
      {
        title: 'Planning',
        description: 'We recommend the right visa or sponsorship route.',
      },
      {
        title: 'Application',
        description: 'We prepare and submit your application.',
      },
      {
        title: 'Support',
        description: 'We guide you through the outcome and next steps.',
      },
    ],
    audiences: [
      {
        label: 'For businesses',
        title: 'Sponsorship and compliance',
        description:
          'Guidance on applying for and holding a UK sponsor licence, support with visa applications for the skilled professionals you hire, and help meeting your obligations as a sponsor.',
      },
      {
        label: 'For individuals',
        title: 'Visas and settlement',
        description:
          'Clear guidance on the route that fits your circumstances, support as you plan long-term life in the UK, and a consultant who explains each step.',
      },
    ],
    regulation:
      'elite PiC is approved by the Immigration Advice Authority (IAA, formerly OISC).',
    faqs: [
      {
        question: 'Do I need a sponsor licence to hire overseas workers?',
        answer:
          'Most UK employers need a sponsor licence to hire skilled workers from outside the UK. elite PiC can guide you through applying for and holding a licence.',
      },
      {
        question: 'How long does a visa application take?',
        answer:
          'Processing times vary by route and individual circumstances. elite PiC will confirm the expected timeline during your consultation and keep you updated throughout.',
      },
      {
        question: 'Can you help with settlement?',
        answer:
          'Yes. elite PiC supports individuals planning long-term life in the UK, including guidance on settlement routes.',
      },
    ],
    regions: ['United Kingdom'],
    color: '#F7941D',
    icon: 'Globe',
    image: images.immigration,
    externalUrl: 'https://www.elitepic.co.uk/',
  },

  /* ─── 4. e2e Cyber Solutions ──────────────────────── */
  {
    slug: 'e2e-cyber-solutions',
    name: 'e2e Cyber Solutions',
    tagline: 'Disruptive ideas. Strategic execution.',
    shortDescription:
      'An integrated web development, marketing and creative agency with digital at its core.',
    longDescription:
      'e2e Cyber Solutions is the missing link between your business and your audience. We bridge that gap by creating new digital avenues, creative strategies and marketing solutions. We build and deliver experiential digital products, conversion-based designs and engaging content. We are a fully functional digital agency providing integrated digital marketing, software, strategy and content solutions across platforms and formats, with cybersecurity among our offerings.',
    services: [
      'Web development',
      'Web design',
      'Mobile app design and development',
      'Digital marketing and SEO',
      'Branding and creative',
      'Cybersecurity',
    ],
    process: [
      {
        title: 'Strategy',
        description: 'We define your brand, competition and audience.',
      },
      {
        title: 'Design',
        description:
          'From logo and layout to content, we bring your brand to life.',
      },
      {
        title: 'Develop',
        description:
          'We turn ideas into functional digital products built for visibility and performance.',
      },
      {
        title: 'Marketing',
        description:
          'We generate more traffic, engagement and relationships with your audience.',
      },
      {
        title: 'Creative',
        description:
          'Compelling content that helps you reach, connect with and retain your audience.',
      },
    ],
    contactInfo: {
      address: '1204B Stratford Road, Birmingham, B28 8HN',
      phone: '0121 271 0369',
      email: 'info@e2ecybersolutions.com',
    },
    regions: ['United Kingdom', 'Global'],
    color: '#EF4444',
    icon: 'Shield',
    image: images.cybersecurity,
    externalUrl: 'https://www.e2ecybersolutions.com/',
  },
];

export default ventures;
