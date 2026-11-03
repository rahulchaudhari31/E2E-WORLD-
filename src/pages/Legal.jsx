import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container, Reveal, Seo } from '../components/common';
import { cookiePolicy, privacyPolicy } from '../data/legal';

const contentMap = {
  privacy: privacyPolicy,
  cookies: cookiePolicy,
};

const Legal = ({ page = 'privacy' }) => {
  const content = contentMap[page] || privacyPolicy;
  const path = page === 'cookies' ? '/cookie-policy' : '/privacy-policy';

  return (
    <>
      <Seo
        title={content.title}
        description={`${content.title} for e2e World Group.`}
        path={path}
      />
      <main>
        <section className="bg-navy py-16 sm:py-20">
          <Container>
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-orange focus-ring"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to home
              </Link>
              <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {content.title}
              </h1>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                {content.updated}
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {content.intro}
              </p>

              <div className="mt-10 space-y-8">
                {content.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-heading text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                      {section.heading}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Legal;
