import { writing } from '../../../config/content';

export async function generateMetadata({ params }) {
  const { slug } = (await params) ?? {};
  const article = slug ? writing.find((a) => a.url === `/blog/${slug}`) : null;

  if (!article || !slug) {
    return {
      title: 'Article | Keshav Kunver',
    };
  }

  const title = `${article.title} | Keshav Kunver`;
  const description = article.description ?? article.title;
  const metaParts = [article.tag, article.readingTime].filter(Boolean);
  const ogDescription = metaParts.length > 0 ? `${metaParts.join(' · ')} · ${description}` : description;
  const url = `https://www.kunver.com/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description: ogDescription,
      url,
      type: 'article',
      siteName: 'Keshav Kunver',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keshav Kunver, AI Engineer' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: ogDescription,
      images: ['/og.png'],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
