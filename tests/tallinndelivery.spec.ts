import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";

test.describe("Negative Login testing on Tallinn Delivery website", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APP_URL);
  });

  test("Sign in testing", async ({ page }) => {
    const loginField = page.locator("#username");
    const passwordField = page.locator("#password");
    const signInButton = page.locator(`[data-name="signIn-button"]`);
    const loginFormError = page
      .locator(`[data-name="username-input-error"]`)
      .nth(0);
    const passwordFormError = page
      .locator(`[data-name="username-input-error"]`)
      .nth(1);
    const popupError = page.locator(`[class="error-popup__title"]`);
    const closeButton = page.locator(
      `[data-name="authorizationError-popup-close-button"]`,
    );

    await expect(loginField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(signInButton).toBeVisible();
    await expect(signInButton).toBeEnabled();
    await loginField.fill(faker.string.alphanumeric(1));
    await page.waitForTimeout(1100);
    await expect(loginFormError).toBeVisible();
    await passwordField.fill(faker.string.alphanumeric(7));
    await expect(passwordFormError).toBeVisible();
    await expect(signInButton).toBeDisabled();

    await loginField.fill(faker.string.alphanumeric(15));
    await passwordField.fill(faker.string.alphanumeric(15));
    await signInButton.click();
    await page.waitForTimeout(1000);
    await expect(popupError).toBeVisible();
    await expect(closeButton).toBeVisible();
    await closeButton.click();

    await expect(closeButton).not.toBeVisible();
  });
});
