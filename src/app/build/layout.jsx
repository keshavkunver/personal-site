export const metadata = {
  title: 'Build With Me | Keshav Kunver',
  description: 'One hour, one screen share. We build your idea together. For non-technical people who want to actually ship.',
  alternates: {
    canonical: '/build',
  },
  openGraph: {
    title: 'Build With Me | Keshav Kunver',
    description: 'One hour, one screen share. We build your idea together. For non-technical people who want to actually ship.',
    url: 'https://www.kunver.com/build',
    type: 'website',
    siteName: 'Keshav Kunver',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keshav Kunver, AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build With Me | Keshav Kunver',
    description: 'One hour, one screen share. We build your idea together. For non-technical people who want to actually ship.',
    images: ['/og.png'],
  },
};

export default function BuildLayout({ children }) {
  return children;
}
