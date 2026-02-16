import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import SmoothScroll from '../components/providers/SmoothScroll'
import '../index.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Keshav Kunver | Engineer & Founder',
  description: 'Software Engineer and Founder building reliable AI-native products from 0 → 1.',
  keywords: ['Keshav Kunver', 'Software Engineer', 'Founder', 'AI Products', 'React Native', 'Full-Stack'],
  authors: [{ name: 'Keshav Kunver' }],
  creator: 'Keshav Kunver',
  publisher: 'Keshav Kunver',
  metadataBase: new URL('https://www.kunver.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kunver.com',
    title: 'Keshav Kunver | Engineer & Founder',
    description: 'Building reliable AI-native products from 0 → 1.',
    siteName: 'Keshav Kunver',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keshav Kunver | Engineer & Founder',
    description: 'Building reliable AI-native products from 0 → 1.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f0f0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Keshav Kunver",
              "url": "https://www.kunver.com",
              "jobTitle": "Technical Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Independent"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "California State University, Fullerton",
                  "location": "Fullerton, CA"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "University of California, Riverside",
                  "location": "Riverside, CA"
                }
              ],
              "knowsAbout": [
                "AI Product Development",
                "React Native",
                "AI Integration",
                "Backend Engineering",
                "Automation",
                "Product Engineering",
                "0 to 1 Building",
                "Startup Engineering"
              ],
              "description": "Technical Founder building AI-native products from 0 → 1.",
              "sameAs": [
                "https://www.linkedin.com/in/keshav-kunver",
                "https://github.com/keshavkunver"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark-bg text-text-secondary antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
