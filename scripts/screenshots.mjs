// Captures a tall screenshot of each live project for the Projects section.
// Run by .github/workflows/screenshots.yml (needs network access to the sites).
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT = "public/images/projectImages";
const SITES = [
  ["sunnah-cure", "https://sunnah-cure.vercel.app/"],
  ["moneypilot", "https://money-pilot-orcin.vercel.app/"],
  ["pharma-nest-bd", "https://pharma-nest-bd.vercel.app/"],
  ["cover-page-generator", "https://cover-page-generator-blush.vercel.app/"],
  ["greysheet", "https://www.greysheet.com/"],
  ["onesuite", "https://onesuite.io/"],
  ["bmboo-lighting", "https://bmboo-lighting.com/"],
  ["dermaquest", "https://dermaquestinc.com/"],
];

const W = 1440;
const MAX_H = 2600; // tall enough for the hover-scroll effect

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: W, height: 900 },
  deviceScaleFactor: 1,
  locale: "en-US",
  colorScheme: "light",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
});

for (const [slug, url] of SITES) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(3000);
    // Dismiss common cookie / newsletter popups.
    for (const sel of [
      'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("Got it")',
      'button:has-text("I agree")', '[aria-label="Close"]', 'button:has-text("No thanks")',
    ]) {
      const el = page.locator(sel).first();
      if (await el.isVisible().catch(() => false)) await el.click({ timeout: 2000 }).catch(() => {});
    }
    // Scroll through once so lazy images and scroll animations load.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1500);
    const h = Math.min(MAX_H, await page.evaluate(() => document.documentElement.scrollHeight));
    await page.setViewportSize({ width: W, height: Math.max(900, h) });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: `${OUT}/${slug}.jpg`,
      type: "jpeg",
      quality: 78,
      clip: { x: 0, y: 0, width: W, height: Math.max(900, h) },
    });
    console.log("ok", slug, h);
  } catch (e) {
    console.log("FAILED", slug, e.message);
  } finally {
    await page.close();
  }
}
await browser.close();
