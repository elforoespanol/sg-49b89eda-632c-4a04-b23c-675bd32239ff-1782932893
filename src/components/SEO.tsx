import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
  ogType?: string;
  publishedTime?: string;
  author?: string;
}

const SITE_NAME = "Let's Master Spanish";
const SITE_URL = "https://letsmasterspanish.com";
const DEFAULT_TITLE = "Let's Master Spanish — Learn Spanish with Proven Strategies";
const DEFAULT_DESCRIPTION = "Empowering Spanish language learners from beginner to fluent through proven strategies, high-quality lessons, and community engagement.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  canonical,
  ogType = "website",
  publishedTime,
  author,
}: SEOProps) {
  const pageUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : pageUrl;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || DEFAULT_IMAGE} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || DEFAULT_IMAGE} />
      <meta name="twitter:site" content="@LetsMasterSpanish" />
    </>
  );
}

// SEO component for use in pages (uses next/head)
export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  canonical,
  ogType = "website",
  publishedTime,
  author,
}: SEOProps) {
  const pageUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : pageUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/logo.jpg" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || DEFAULT_IMAGE} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || DEFAULT_IMAGE} />
      <meta name="twitter:site" content="@LetsMasterSpanish" />
    </Head>
  );
}
