// Regenerates public/og-websites.png (1200x630).
//
// Kept in the repo because the previous version was a throwaway script in
// /tmp, which is why "live in two weeks" survived in the image long after the
// claim was removed from every page. If the offer's price or speed changes,
// edit the copy below and run:
//
//   node scripts/generate-og-websites.mjs
//
// Then compress: sharp(...).png({quality:90,compressionLevel:9}) - the raw
// screenshot is ~590KB and compresses to ~50KB.
//
// Design follows the Monument-under-aurora tokens in tailwind.config.js.

import puppeteer from 'puppeteer';

// Matches the Monument-under-aurora tokens in tailwind.config.js: ink-indigo
// ground, teal glow upper-left, gold lower-right, grain, ivory text.
const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;position:relative;overflow:hidden;
       background:linear-gradient(160deg,#0c101d 0%,#101528 60%,#12182b 100%);}
  .glow-a{position:absolute;inset:0;
    background:radial-gradient(ellipse 55% 40% at 12% 8%, rgba(52,211,153,0.11) 0%, transparent 60%);}
  .glow-b{position:absolute;inset:0;
    background:radial-gradient(ellipse 60% 44% at 82% 88%, rgba(217,164,65,0.22) 0%, transparent 65%);}
  .wrap{position:absolute;inset:0;padding:0 80px;display:flex;flex-direction:column;justify-content:center}
  h1{font-family:'Source Serif 4',Georgia,serif;font-weight:500;font-size:74px;line-height:1.08;
     color:#f8f6f0;letter-spacing:-0.005em;max-width:1000px}
  .sub{font-family:Inter,system-ui,sans-serif;font-size:29px;margin-top:28px;color:#b4b5b8}
  .sub b{color:#f8f6f0;font-weight:600}
  .url{position:absolute;left:80px;bottom:56px;font-family:Inter,system-ui,sans-serif;
       font-size:22px;font-weight:600;color:#f8f6f0}
  .url span{color:#898c94;font-weight:400}
</style></head><body>
  <div class="glow-a"></div><div class="glow-b"></div>
  <div class="wrap">
    <h1>Websites for local service businesses.</h1>
    <p class="sub"><b>$1,300 flat.</b> Built in about a week, by one engineer.</p>
  </div>
  <div class="url">kunver.com<span>/websites</span></div>
</body></html>`;

const b = await puppeteer.launch();
const p = await b.newPage();
await p.setViewport({width:1200,height:630,deviceScaleFactor:2});
await p.setContent(html,{waitUntil:'networkidle0'});
await p.evaluate(()=>document.fonts.ready);
await p.evaluate(()=>new Promise(r=>setTimeout(r,600)));
await p.screenshot({path:'/tmp/og-websites-raw.png'});
await b.close();

// Compress: the 2x screenshot is ~590KB, which is heavy for a social card.
const sharp = (await import('sharp')).default;
await sharp('/tmp/og-websites-raw.png')
  .resize(1200, 630)
  .png({ quality: 90, compressionLevel: 9 })
  .toFile('public/og-websites.png');

const { statSync } = await import('node:fs');
console.log(`written: public/og-websites.png (${(statSync('public/og-websites.png').size / 1024).toFixed(0)}KB)`);
