import { Helmet } from 'react-helmet-async'

export default function SEOHead({
  title,
  description,
  canonical,
  type = 'website',
  noIndex = false,
}) {
  const siteUrl = 'https://www.vio-tec.de'
  const defaultDescription = 'Vio-Tec – Individuelle Software, Automatisierung & IT-Lösungen für Unternehmen. Softwareentwicklung, Prozessautomatisierung, Schnittstellen & APIs, Webentwicklung. Viorel Ghiurca, IHK-geprüfter Fachinformatiker.'
  const fullTitle = title ? `${title} | Vio-Tec` : 'Vio-Tec – Individuelle Software, Automatisierung & IT-Lösungen für Unternehmen'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Vio-Tec" />
      <meta property="og:locale" content="de_DE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  )
}
