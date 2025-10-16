import { test, expect } from '@playwright/test';

test('login page should have correct header', async ({ page }) => {
  await page.goto('/docs/intro');
  const header = await page.locator('h1');
  await expect(header).toContainText('Installation');
});
