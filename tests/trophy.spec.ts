import { test, expect } from "@playwright/test";

test("3D trophy renders, rotates and stays in front of the photos", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".trophy-ready")).toBeVisible({ timeout: 30_000 });
  const canvas = page.locator(".trophy-canvas");
  const initial = await canvas.getAttribute("data-rotation");
  await expect.poll(() => canvas.getAttribute("data-rotation")).not.toBe(initial);
  await expect(page.locator(".reference-medal")).toHaveCount(0);
  expect(await page.locator(".trophy-experience").evaluate((el) => Number(getComputedStyle(el).zIndex))).toBeGreaterThan(1);
});

test("hero fills one viewport and keeps the following section below it", async ({ page }) => {
  for (const [width, height] of [[1920,1080], [2560,1440], [1280,720], [390,844], [360,640], [844,390]]) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    const hero = await page.locator(".reference-hero").boundingBox();
    const next = await page.locator(".moments").boundingBox();
    expect(Math.abs(hero!.y)).toBeLessThan(1);
    expect(Math.abs(hero!.height - height)).toBeLessThan(1);
    expect(next!.y).toBeGreaterThanOrEqual(height - 1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
