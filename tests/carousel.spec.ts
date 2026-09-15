import { test, expect } from "@playwright/test";

test("reduced-motion visitors can explicitly play and retain playback on refresh", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Play photo carousel" }).click();
  await expect(page.locator(".event-slide-count strong")).toHaveText("02", { timeout: 15_000 });
  await page.reload();
  await expect(page.getByRole("button", { name: "Pause photo carousel" })).toBeVisible();
  await expect(page.locator(".event-slide-count strong")).toHaveText("02", { timeout: 15_000 });
});

test("event carousel shows all 15 original photos and wraps in both directions", async ({ page }) => {
  await page.goto("/");
  const carousel = page.getByRole("region", { name: "SSI event photographs" });
  await expect(carousel.locator(".event-slide")).toHaveCount(15);
  for (let index = 0; index < 15; index++) {
    await expect(carousel.locator(".event-slide-count strong")).toHaveText(String(index + 1).padStart(2, "0"));
    await expect.poll(() => carousel.locator(".is-active img").evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await carousel.getByRole("button", { name: "Next event photo" }).click();
  }
  await expect(carousel.locator(".event-slide-count strong")).toHaveText("01");
  await carousel.getByRole("button", { name: "Previous event photo" }).click();
  await expect(carousel.locator(".event-slide-count strong")).toHaveText("15");
  await expect(carousel.getByRole("button", { name: "Play photo carousel" })).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("ArrowRight");
  await expect(carousel.locator(".event-slide-count strong")).toHaveText("01");
});

test("carousel advances automatically and respects reduced motion", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".event-slide-count strong")).toHaveText("02", { timeout: 15_000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.getByRole("button", { name: "Pause photo carousel" })).toHaveCount(0);
  const current = await page.locator(".event-slide-count strong").textContent();
  await page.waitForTimeout(6500);
  await expect(page.locator(".event-slide-count strong")).toHaveText(current!);
});

test("play resumes with the pointer and focus still on the carousel", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Next event photo" }).click();
  await expect(page.locator(".event-slide-count strong")).toHaveText("02");
  await page.getByRole("button", { name: "Play photo carousel" }).click();
  await expect(page.locator(".event-slide-count strong")).toHaveText("03", { timeout: 15_000 });
});
