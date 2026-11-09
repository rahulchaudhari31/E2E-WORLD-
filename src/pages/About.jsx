import { PageHero, Seo } from '../components/common';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import Timeline from '../components/about/Timeline';
import GroupStructure from '../components/about/GroupStructure';
import CoreValues from '../components/about/CoreValues';
import GlobalPresence from '../components/about/GlobalPresence';
import CTABanner from '../components/about/CTABanner';
import { company } from '../data/site';
import images from '../data/images';

const About = () => {
  return (
    <>
      <Seo
        title={company.name}
        description="e2e World Group was founded in Birmingham in 2007 and brings together four specialist companies delivering recruitment, HR, IT, immigration and digital solutions."
        path="/about"
      />
      <main>
        <PageHero
          eyebrow="Our Story"
          title={company.name}
          subtitle="Founded in 2007 and headquartered in Birmingham, we bring four specialist companies together to support UK businesses and skilled professionals at every step."
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
        <GlobalPresence />
        <CTABanner />
      </main>
    </>
  );
};

export default About;
