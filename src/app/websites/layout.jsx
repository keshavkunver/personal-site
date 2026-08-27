export const metadata = {
  title: 'Websites for Local Service Businesses | Keshav Kunver',
  description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
  // Suppress the site-wide AI engineering keywords; they don't fit this page.
  keywords: null,
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Websites for Local Service Businesses | Keshav Kunver',
    description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
    url: 'https://www.kunver.com/websites',
    type: 'website',
    siteName: 'Keshav Kunver',
    images: [{ url: '/og-websites.png', width: 1200, height: 630, alt: 'Websites for local service businesses. Live in two weeks, $1,300 flat.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites for Local Service Businesses | Keshav Kunver',
    description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
    images: ['/og-websites.png'],
  },
};

export default function WebsitesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Websites for Local Service Businesses',
            serviceType: 'Website design and development',
            url: 'https://www.kunver.com/websites',
            provider: {
              '@type': 'Person',
              name: 'Keshav Kunver',
              url: 'https://www.kunver.com',
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Website build',
                price: '1300',
                priceCurrency: 'USD',
                description:
                  'Up to 5 pages, mobile-first, live on your domain in about two weeks.',
              },
              {
                '@type': 'Offer',
                name: 'Maintenance plan',
                price: '99',
                priceCurrency: 'USD',
                description: 'Monthly updates, fixes, and hosting oversight. Optional.',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
