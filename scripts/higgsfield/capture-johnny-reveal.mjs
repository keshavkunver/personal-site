import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = (() => { try { return require('playwright'); } catch { return require('/usr/local/lib/node_modules/playwright'); } })();
import { writeFile } from 'node:fs/promises';
const browser = await chromium.launch({headless:true,args:['--no-sandbox']});
const bounds = {};
try {
  for (const [name,viewport] of [['desktop',{width:1440,height:960}],['phone',{width:390,height:844}]]) {
    const page=await browser.newPage({viewport,reducedMotion:'reduce'});
    await page.goto('https://johnny-ferraer-massage-therapy.vercel.app/',{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(2500);
    bounds[name]=await page.locator('main img').evaluateAll(images=>{
      const image=images.sort((a,b)=>b.getBoundingClientRect().width*b.getBoundingClientRect().height-a.getBoundingClientRect().width*a.getBoundingClientRect().height)[0];
      const r=image.getBoundingClientRect();
      return {x:r.x,y:r.y,width:r.width,height:Math.min(r.height,innerHeight-r.y)};
    });
    await page.screenshot({path:name+'.png',animations:'disabled'});
    await page.close();
  }
  await writeFile('bounds.json',JSON.stringify(bounds,null,2));
} finally {await browser.close();}
