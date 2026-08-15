export const metadata = {
  title: 'Websites for Local Service Businesses | Keshav Kunver',
  description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Websites for Local Service Businesses | Keshav Kunver',
    description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
    url: 'https://www.kunver.com/websites',
    type: 'website',
    siteName: 'Keshav Kunver',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keshav Kunver, AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites for Local Service Businesses | Keshav Kunver',
    description: 'I build websites for local service businesses. Flat price, live in about two weeks, built by one engineer instead of a template or an agency.',
    images: ['/og.png'],
  },
};

export default function WebsitesLayout({ children }) {
  return children;
}
