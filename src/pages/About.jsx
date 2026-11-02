import { PageHero, Seo } from '../components/common';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import Timeline from '../components/about/Timeline';
import GroupStructure from '../components/about/GroupStructure';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import GlobalPresence from '../components/about/GlobalPresence';
import CTABanner from '../components/about/CTABanner';
import { company } from '../data/site';
import images from '../data/images';

const About = () => {
  return (
    <>
      <Seo
        title={`About ${company.name}`}
        description="Learn about e2e World Group, our mission, values, timeline and the specialist ventures delivering recruitment, HR, IT, immigration and cyber security solutions."
        path="/about"
      />
      <main>
        <PageHero
          eyebrow="Our Story"
          title={`About ${company.name}`}
          subtitle="A UK-based group of specialist ventures delivering recruitment, HR, IT, immigration and cyber security solutions — with a global outlook."
          image={images.heroDark}
          breadcrumb={[
            { label: 'Home', to: '/' },
            { label: 'About Us' },
          ]}
        />

        <CompanyStory />
        <MissionVision />
        <Timeline />
        <GroupStructure />
        <CoreValues />
        <TeamSection />
        <GlobalPresence />
        <CTABanner />
      </main>
    </>
  );
};

export default About;
