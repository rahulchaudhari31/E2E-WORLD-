import { Seo } from '../components/common';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import VenturesSection from '../components/home/VenturesSection';
import AboutPreview from '../components/home/AboutPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsCounter from '../components/home/StatsCounter';
import ServicesTabs from '../components/home/ServicesTabs';
import LocationsSection from '../components/home/LocationsSection';
import CTASection from '../components/home/CTASection';
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
        title="End-to-End Recruitment, HR, IT, Immigration & Cyber Security"
        description={site.defaultDescription}
        path="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <main>
        <HeroSection />
        <TrustStrip />
        <VenturesSection />
        <AboutPreview />
        <WhyChooseUs />
        <StatsCounter />
        <ServicesTabs />
        <LocationsSection />
        <CTASection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
