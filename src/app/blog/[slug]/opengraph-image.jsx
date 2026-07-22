import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { writing } from '../../../config/content';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Keshav Kunver, AI Engineer';

export default async function OgImage({ params }) {
  const { slug } = await params;
  const article = writing.find((a) => a.url === `/blog/${slug}`);
  const title = article?.title ?? 'Keshav Kunver | AI Engineer';
  const metaParts = [article?.tag, article?.readingTime].filter(Boolean).join(' · ');
  const fontData = await readFile(
    join(process.cwd(), 'src/assets/fonts/InstrumentSans-Bold.ttf')
  );
  const titleSize = title.length > 48 ? 52 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0f0f0f',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: 'Instrument Sans',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
          }}
        />
        <div style={{ color: '#8a8a8a', fontSize: 24, display: 'flex' }}>
          Keshav Kunver · kunver.com
        </div>
        <div
          style={{
            color: '#ededed',
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: 1000,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div style={{ color: '#8a8a8a', fontSize: 26, display: 'flex' }}>{metaParts}</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Instrument Sans', data: fontData, weight: 700 }],
    }
  );
}
