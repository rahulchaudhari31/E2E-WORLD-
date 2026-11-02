/**
 * Seo — Page-level title, description, canonical, social cards and JSON-LD.
 */
import { Helmet } from 'react-helmet-async';
import { company, site } from '../../data/site';

/**
 * @param {object} props
 * @param {string} [props.title] Page title without the brand suffix.
 * @param {string} [props.description] Page meta description.
 * @param {string} [props.path='/'] Route path used for the canonical URL.
 * @param {string} [props.image=site.ogImage] Absolute or root-relative social image.
 * @param {'website'|'article'} [props.type='website'] Open Graph type.
 * @param {boolean} [props.noindex=false] Prevent search indexing.
 * @param {object|object[]} [props.jsonLd] Structured data block(s).
 */
const Seo = ({
  title,
  description = site.defaultDescription,
  path = '/',
  image = site.ogImage,
  type = 'website',
  noindex = false,
  jsonLd,
}) => {
  const pageTitle = title ? `${title} | ${company.name}` : site.defaultTitle;
  const canonical = new URL(path, site.url).href;
  const imageUrl = new URL(image, site.url).href;
  const structuredData = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${company.name} brand card`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
