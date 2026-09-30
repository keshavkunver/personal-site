/** Real viewport captures for /websites. Run from personal-site: node scripts/capture-website-showcase.mjs */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const targets = [
  { id: 'nv-studio', url: 'https://nv-studio-nine.vercel.app', scenes: [['home', ''], ['work', '#work'], ['services', '#services']] },
  { id: 'mack-minaya', url: 'https://mack-minaya-site.vercel.app', scenes: [['home', ''], ['work', '/work'], ['contact', '/contact']] },
  { id: 'johnny-ferraer', url: 'https://johnny-ferraer-massage-therapy.vercel.app', scenes: [['home', ''], ['first-visit', '/first-visit'], ['services', '/services']] },
];
const browser = await chromium.launch({ headless: true });
try {
  for (const target of targets.filter(target => !process.argv[2] || target.id === process.argv[2])) {
    const dir = `public/work/showcase/${target.id}`;
    await mkdir(dir, { recursive: true });
    for (const [device, viewport] of [['desktop', { width: 1440, height: 960 }], ['phone', { width: 390, height: 844 }]]) {
      const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      for (const [name, path] of target.scenes) {
        const response = await page.goto(`${target.url}${path.startsWith('#') ? '/' : path}`, { waitUntil: 'networkidle' });
        if (!response?.ok()) throw new Error(`Capture failed: ${target.url}${path}`);
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(2500);
        if (path.startsWith('#')) await page.locator(path).scrollIntoViewIfNeeded();
        await page.waitForTimeout(1200);
        await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; } * { caret-color: transparent !important; }' });
        const png = await page.screenshot({ animations: 'disabled' });
        await sharp(png).webp({ quality: 85 }).toFile(`${dir}/${name}-${device}.webp`);
        console.log(`${target.id}/${name}-${device}`);
      }
      await page.close();
    }
  }
} finally { await browser.close(); }
