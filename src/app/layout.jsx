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
  title: 'Keshav Kunver | AI Engineer',
  description: 'I build production LLM apps: agents, RAG, and the evals that keep them from breaking.',
  keywords: ['Keshav Kunver', 'AI Engineer', 'LLM', 'AI Agents', 'RAG', 'LLM Evaluation', 'React Native'],
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
    title: 'Keshav Kunver | AI Engineer',
    description: 'I build production LLM apps: agents, RAG, and the evals that keep them from breaking.',
    siteName: 'Keshav Kunver',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keshav Kunver, AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keshav Kunver | AI Engineer',
    description: 'I build production LLM apps: agents, RAG, and the evals that keep them from breaking.',
    images: ['/og.png'],
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
              "jobTitle": "AI Engineer",
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
                "LLM Agents",
                "RAG",
                "LLM Evaluation",
                "AI Product Development",
                "React Native",
                "Backend Engineering"
              ],
              "description": "AI Engineer building production LLM apps: agents, RAG, and the evals that keep them from breaking.",
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
