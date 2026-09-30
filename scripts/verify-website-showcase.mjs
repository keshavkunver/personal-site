import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ headless: true });
const output = '/tmp/website-showcase-review';
await mkdir(output, { recursive: true });
const errors = [];
try {
  for (const width of [390, 820, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    page.setDefaultTimeout(10000);
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    const response = await page.goto('http://localhost:3000/websites', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    const stage = page.locator('section[aria-labelledby="showcase-title"]');
    await stage.scrollIntoViewIfNeeded();
    // Assert desktop autoplay / phone static start, then pause for deterministic review.
    if (width > 767) {
      await stage.getByRole('button', { name: 'Pause' }).click();
    } else {
      assert.equal(await stage.getByRole('button', { name: 'Play' }).count(), 1);
      assert.equal(await stage.locator('video').getAttribute('src'), null);
    }
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Overflow at ${width}`);
    const filmButton = stage.getByRole('button', { name: 'Film', exact: true });
    await filmButton.click();
    await page.waitForFunction(() => {
      const video = document.querySelector('section[aria-labelledby="showcase-title"] video');
      return video.currentTime > .25 && !video.paused;
    });
    const filmSrc = await stage.locator('video').getAttribute('src');
    assert.equal(filmSrc.endsWith(width < 768 ? 'reveal-mobile.mp4' : '/reveal.mp4'), true);
    await stage.getByRole('button', { name: 'Pause', exact: true }).click();
    const stoppedTime = await stage.locator('video').evaluate(video => video.currentTime);
    await page.waitForTimeout(400);
    assert.ok(Math.abs(await stage.locator('video').evaluate(video => video.currentTime) - stoppedTime) < .1);
    await stage.getByRole('button', { name: 'Play', exact: true }).click();
    await page.locator('#concept').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    assert.equal(await stage.locator('video').evaluate(video => video.paused), true);
    await stage.scrollIntoViewIfNeeded();
    // Seek within the real media to exercise the natural ended event without waiting for the whole film again.
    await stage.locator('video').evaluate(video => { video.currentTime = video.duration - .3; });
    await page.waitForTimeout(900);
    assert.equal(await stage.getByRole('button', { name: 'Home', exact: true }).getAttribute('aria-pressed'), 'true');
    assert.equal(await stage.getByRole('button', { name: 'Play', exact: true }).count(), 1);
    await filmButton.click();
    await page.waitForFunction(() => document.querySelector('section[aria-labelledby="showcase-title"] video').currentTime > .1);
    await stage.getByRole('button', { name: 'Pause', exact: true }).click();
    await stage.locator('video').evaluate(video => { video.currentTime = 5; });
    await page.waitForTimeout(200);
    await stage.screenshot({path: `${output}/johnny-film-${width}.png`});

    for (const name of ['NV Studio', 'Mack Minaya', 'Johnny Ferraer']) {
      await stage.getByRole('group', { name: 'Choose a website' }).getByRole('button', { name: new RegExp(name) }).click();
      const chapters = stage.getByRole('group', { name: /walkthrough chapters/ }).getByRole('button').filter({hasNotText: /^Film$/});
      for (let index = 0; index < 3; index++) {
        await chapters.nth(index).click();
        await page.waitForFunction(() => [...document.querySelectorAll('section[aria-labelledby="showcase-title"] img')].every(image => image.complete && image.naturalWidth > 0));
        assert.equal(await chapters.nth(index).getAttribute('aria-pressed'), 'true');
      }
    }
    await stage.getByRole('group', { name: 'Choose a website' }).getByRole('button', { name: /NV Studio/ }).click();
    // Keyboard can change scenes and receives a visible focus outline.
    const work = stage.getByRole('button', { name: /^Work$/ });
    await stage.getByRole('button', { name: /^Home$/ }).focus();
    await page.keyboard.press('Tab');
    assert.notEqual(await work.evaluate(element => getComputedStyle(element).outlineStyle), 'none');
    await page.keyboard.press('Enter');
    assert.equal(await work.getAttribute('aria-pressed'), 'true');
    await stage.getByRole('button', { name: /^Home$/ }).click();
    await page.waitForTimeout(900);
    await stage.screenshot({ path: `${output}/showcase-${width}.png` });
    await page.screenshot({ path: `${output}/page-${width}.png`, fullPage: true });
    // Play changes scenes; pause holds them.
    await stage.getByRole('button', { name: 'Play' }).click();
    await page.waitForTimeout(6800);
    assert.equal(await work.getAttribute('aria-pressed'), 'true');
    assert.equal(await stage.locator('video').evaluate(video => video.currentTime > 0 && !video.paused), true);
    await stage.getByRole('button', { name: 'Pause' }).click();
    await page.waitForTimeout(6700);
    assert.equal(await work.getAttribute('aria-pressed'), 'true');
    assert.equal(await stage.locator('video').evaluate(video => video.paused), true);
    await page.close();
    console.log(`PASS ${width}: all projects/chapters load, no overflow, keyboard focus, play/pause, video playback`);
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  await page.goto('http://localhost:3000/websites', { waitUntil: 'networkidle' });
  const stage = page.locator('section[aria-labelledby="showcase-title"]');
  await stage.scrollIntoViewIfNeeded();
  assert.equal(await stage.getByRole('button', { name: /^(Play|Pause|Film)$/ }).count(), 0);
  assert.equal(await stage.locator('video').getAttribute('src'), null);
  assert.equal(await stage.locator('img').first().evaluate(image => getComputedStyle(image).animationName), 'none');
  await stage.getByRole('button', { name: /^First visit$/ }).click();
  assert.equal(await stage.getByRole('button', { name: /^First visit$/ }).getAttribute('aria-pressed'), 'true');
  console.log('PASS reduced motion: no video download, no auto animation, manual controls work');
  assert.deepEqual(errors, []);
  console.log(`PASS no browser errors. Screenshots: ${output}`);
} finally { await browser.close(); }
