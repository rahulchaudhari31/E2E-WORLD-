import { Container, PageHero, Reveal, Seo } from '../components/common';
import ZigZagVentureRow from '../components/ventures/ZigZagVentureRow';
import NeedFinder from '../components/ventures/NeedFinder';
import { company } from '../data/site';
import ventures from '../data/ventures';
import images from '../data/images';

const Ventures = () => {
  return (
    <>
      <Seo
        title="Our Ventures"
        description="Explore the four specialist e2e World Group ventures covering recruitment and HR, technical hiring and IT, immigration advisory, and cyber security."
        path="/ventures"
      />
      <main>
        <PageHero
          eyebrow="Our Companies"
          title="Our Ventures"
          subtitle="Four specialist companies working as one connected group — covering recruitment, technical hiring, immigration and digital security."
          image={images.cityscape}
          breadcrumb={[
            { label: 'Home', to: '/' },
            { label: 'Our Ventures' },
          ]}
        />

        <section className="bg-white py-12 md:py-16">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-slate-600">
                {company.description}
              </p>
              <p className="mt-4 text-slate-500">
                Each venture has its own specialist focus, but every team shares
                the same commitment to practical expertise, compliance and
                long-term partnership.
              </p>
            </Reveal>
          </Container>
        </section>

        {ventures.map((venture, index) => (
          <section
            key={venture.slug}
            aria-label={venture.name}
            className={`scroll-mt-[var(--nav-height)] py-14 sm:py-16 lg:py-20 ${
              index % 2 === 0 ? 'bg-white' : 'bg-offwhite'
            }`}
          >
            <Container>
              <ZigZagVentureRow
                venture={venture}
                reverse={index % 2 === 1}
              />
            </Container>
          </section>
        ))}

        <NeedFinder />
      </main>
    </>
  );
};

export default Ventures;
