import { test, expect } from "@playwright/test";

test("home loads original photos and fits the viewport", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Every championhas a journey.");
  await page.evaluate(() => document.fonts.ready);
  await page.locator(".speaker-photo").scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator(".photo-button img").evaluateAll((images) => images.every((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0))).toBe(true);
  await page.evaluate(() => window.scrollTo(0, 0));
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: `artifacts/website-${testInfo.project.name}.png`, fullPage: true });
  expect(errors).toEqual([]);
});

test("gallery supports navigation, filtering, and original downloads", async ({ page, request }) => {
  await page.goto("/gallery");
  await expect(page.locator(".gallery-card")).toHaveCount(3);
  await page.getByRole("button", { name: "The conclave", exact: true }).click();
  await expect(page.locator(".gallery-card")).toHaveCount(1);
  await page.locator(".gallery-card").click();
  const dialog = page.getByRole("dialog", { name: "SSI Sports Awards photo gallery" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading")).toHaveText("Leadership that inspires possibilities");
  await dialog.getByRole("button", { name: "Next photo", exact: true }).click();
  await expect(dialog.getByRole("heading")).toHaveText("The pride of representing India");
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.getByRole("heading")).toHaveText("Leadership that inspires possibilities");
  await expect(dialog.getByRole("link", { name: "Original photo" })).toHaveAttribute("href", "/images/speaker.jpg");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  const archive = await request.get("/downloads/ssi-original-images.zip");
  expect(archive.status()).toBe(200);
  expect((await archive.body()).length).toBeGreaterThan(100000);
});

test("nomination validates, saves, reviews and downloads without submitting", async ({ page }) => {
  await page.goto("/");
  await page.locator(".hero-actions").getByRole("button", { name: "Nominate an athlete" }).click();
  const dialog = page.getByRole("dialog", { name: "Prepare an athlete nomination" });
  await dialog.getByRole("button", { name: "Review draft" }).click();
  await expect(dialog.getByText("Enter the athlete's name.", { exact: true })).toBeVisible();
  await dialog.getByLabel("Athlete's name *", { exact: true }).fill("Test Athlete");
  await dialog.getByLabel("Sport *", { exact: true }).fill("Athletics");
  await dialog.getByLabel("Your name *", { exact: true }).fill("Test Nominator");
  await dialog.getByLabel("Your email *", { exact: true }).fill("test@example.com");
  await dialog.getByLabel("Their story & achievements *", { exact: true }).fill("A test nomination celebrating sporting achievements and community support.");
  await dialog.getByRole("button", { name: "Save for later" }).click();
  await expect(dialog.getByRole("status")).toContainText("Draft saved");
  await dialog.getByRole("button", { name: "Close nomination form" }).click();
  await page.locator(".hero-actions").getByRole("button", { name: "Nominate an athlete" }).click();
  await expect(dialog.getByLabel("Athlete's name *", { exact: true })).toHaveValue("Test Athlete");
  await dialog.getByRole("button", { name: "Review draft" }).click();
  await expect(dialog.locator(".nomination-review")).toContainText("Test Athlete");
  const downloadEvent = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Download draft", exact: true }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("ssi-nomination-draft.txt");
  await expect(dialog.getByRole("status")).toContainText("It has not been submitted");
  await dialog.getByRole("button", { name: "Edit details" }).click();
  await expect(dialog.getByLabel("Sport *", { exact: true })).toHaveValue("Athletics");
});

test("header navigation and about dialog work", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Learn more about SSI" }).click();
  const about = page.getByRole("dialog", { name: "About the SSI Sports Awards", exact: true });
  await expect(about).toBeVisible();
  await about.getByRole("button", { name: "Close about the awards" }).click();
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Gallery", exact: true }).click();
  await expect(page).toHaveURL(/\/gallery$/);
  if (testInfo.project.name === "mobile") await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});
