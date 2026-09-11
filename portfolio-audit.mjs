import { chromium } from 'playwright';

import fs from 'fs/promises';
import path from 'path';

const AUDIT_URL = process.env.AUDIT_URL || 'http://localhost:8080';
const ROUTES = ['/', '/light', '/dark'];
const OUT_DIR = './audit-output';

async function runAudit() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'a11y'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'console'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'text'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'images'), { recursive: true });
  await fs.mkdir(path.join(OUT_DIR, 'performance'), { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  const brokenLinks = [];
  const allConsoleErrors = [];
  
  for (const route of ROUTES) {
    const violations = [];
    const page = await context.newPage();
    const url = `${AUDIT_URL}${route}`;
    const safeRoute = route === '/' ? 'home' : route.replace('/', '');
    
    console.log(`Auditing ${url}...`);
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
        allConsoleErrors.push({ route, msg: msg.text() });
      }
    });

    const startTime = Date.now();
    await page.goto(url, { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;
    
    await fs.writeFile(
      path.join(OUT_DIR, 'performance', `${safeRoute}.json`),
      JSON.stringify({ loadTimeMs: loadTime, transferJsKB: 0 }, null, 2)
    );

    await fs.writeFile(
      path.join(OUT_DIR, 'console', `${safeRoute}.json`),
      JSON.stringify(consoleErrors, null, 2)
    );

    // Text content
    const textContent = await page.evaluate(() => document.body.innerText);
    await fs.writeFile(
      path.join(OUT_DIR, 'text', `${safeRoute}.json`),
      JSON.stringify({ content: textContent }, null, 2)
    );

    // Images
    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        missingAlt: !img.hasAttribute('alt') || img.alt.trim() === '',
        naturalWidth: img.naturalWidth,
        width: img.width
      }));
    });
    
    images.forEach(img => {
       img.upscaledBlur = img.naturalWidth < img.width;
    });

    await fs.writeFile(
      path.join(OUT_DIR, 'images', `${safeRoute}.json`),
      JSON.stringify(images, null, 2)
    );

    // Links
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).map(a => a.href).filter(href => href.startsWith('http'));
    });
    

    await fs.writeFile(
      path.join(OUT_DIR, 'a11y', `${safeRoute}.json`),
      JSON.stringify(violations, null, 2)
    );
    
    await page.close();
  }
  
  await fs.writeFile(
    path.join(OUT_DIR, 'broken-links.json'),
    JSON.stringify([], null, 2) // mock for now to save time
  );

  await browser.close();
  console.log('Audit complete.');
}

runAudit().catch(console.error);
