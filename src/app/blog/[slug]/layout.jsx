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
  const url = `https://www.kunver.com/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Keshav Kunver',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
