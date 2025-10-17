import { test, expect } from '@playwright/test';


test('should navigate to Docs page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Docs' }).click();
    await expect(page).toHaveURL(/.*docs/);
    await expect(page.getByRole('button', {name: "Getting Started"})).toBeVisible();
  });


test('login page should have correct header', async ({ page }) => {
    await page.goto('/docs/intro');
    const header = await page.locator('h1');
    await expect(header).toContainText('Installation');
});


