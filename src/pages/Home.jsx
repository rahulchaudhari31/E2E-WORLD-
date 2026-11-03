import { Seo } from '../components/common';
import HeroSection from '../components/home/HeroSection';
import MarqueeBand from '../components/home/MarqueeBand';
import CompaniesSection from '../components/home/CompaniesSection';
import ServicesSection from '../components/home/ServicesSection';
import JourneySection from '../components/home/JourneySection';
import AboutPreview from '../components/home/AboutPreview';
import GlobalPresenceSection from '../components/home/GlobalPresenceSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import { company, contact, site } from '../data/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: site.url,
  logo: new URL('/logo.svg', site.url).href,
  description: company.description,
  foundingDate: String(company.founded),
  email: contact.email,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.address.line2}, ${contact.address.line3}`,
    addressLocality: 'Birmingham',
    postalCode: contact.address.postcode,
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: contact.phone,
    email: contact.email,
  },
  sameAs: [contact.social.linkedin],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: company.name,
  url: site.url,
  description: site.defaultDescription,
  publisher: {
    '@type': 'Organization',
    name: company.name,
  },
};

const Home = () => {
  return (
    <>
      <Seo
        title="Talent, Technology, Compliance & Growth"
        description={site.defaultDescription}
        path="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <main>
        <HeroSection />
        <MarqueeBand />
        <CompaniesSection />
        <ServicesSection />
        <JourneySection />
        <AboutPreview />
        <GlobalPresenceSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
