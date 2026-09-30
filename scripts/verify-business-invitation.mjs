import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const base = process.env.BASE_URL || 'http://localhost:3000';
const output = '/tmp/business-invitation-review';
await mkdir(output, { recursive:true });
const browser = await chromium.launch();
try {
  for (const width of [390,820,1440]) {
    const page = await browser.newPage({ viewport:{width,height:1000} });
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    const requests=[];
    page.on('request',r=>{if(r.url().includes('/work/invitation/') && r.url().endsWith('.mp4'))requests.push(r.url());});
    await page.goto(`${base}/websites`);
    const card=page.locator('[data-business-invitation]');
    await card.scrollIntoViewIfNeeded();
    if(width===390){
      await page.waitForTimeout(500);
      assert.equal(requests.length,0,'mobile waits for Play');
      await card.getByRole('button',{name:'Play business website concepts',exact:true}).click();
    }
    await page.waitForTimeout(2500);
    await card.getByRole('button',{name:'Pause business website concepts',exact:true}).click();
    const position=await card.locator('video').evaluate(v=>v.currentTime);
    assert(position>0,'real video playback');
    await page.waitForTimeout(500);
    assert(Math.abs(await card.locator('video').evaluate(v=>v.currentTime)-position)<.15,'pause');
    await card.screenshot({path:`${output}/framed-${width}.png`});
    await card.getByRole('button',{name:'Play business website concepts',exact:true}).click();
    if(width===1440){
      await page.evaluate(()=>window.scrollTo(0,0));
      await page.waitForTimeout(700);
      assert(await card.locator('video').evaluate(v=>v.paused),'offscreen pause');
      await card.scrollIntoViewIfNeeded();
    }
    await page.waitForFunction(()=>document.querySelector('[data-business-invitation]').dataset.step==='3',{},{timeout:25000});
    assert.equal(new Set(requests).size,3,'exactly three business videos');
    await page.waitForTimeout(800);
    await card.screenshot({path:`${output}/finished-${width}.png`});
    await card.getByRole('button',{name:'Replay business website concepts'}).click();
    assert.equal(await card.getAttribute('data-step'),'0');
    await card.getByRole('button',{name:'Pause business website concepts',exact:true}).click();
    await page.keyboard.press('Shift+Tab');
    assert(await card.getByRole('link').evaluate(el=>el===document.activeElement));
    assert.notEqual(await card.getByRole('link').evaluate(el=>getComputedStyle(el).outlineStyle),'none');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no overflow');
    assert.deepEqual(errors,[]);
    console.log(width,'play/pause/replay/three scenes/layout PASS');
    await page.close();
  }
  for(const mode of ['reduced','nojs']){
    const page=await browser.newPage({reducedMotion:mode==='reduced'?'reduce':'no-preference',javaScriptEnabled:mode!=='nojs'});
    const requests=[];page.on('request',r=>{if(r.url().includes('/work/invitation/')&&r.url().endsWith('.mp4'))requests.push(r.url());});
    await page.goto(`${base}/websites`);const card=page.locator('[data-business-invitation]');await card.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);assert.equal(requests.length,0);assert(await card.getByRole('heading',{name:'Your website here.'}).isVisible());
    await card.getByRole('link').click();assert(page.url().endsWith('#concept'));console.log(mode,'PASS');await page.close();
  }
} finally { await browser.close(); }
