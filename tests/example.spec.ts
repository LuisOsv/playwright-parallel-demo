import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('should perform a search', async ({ page }) => {
    await page.goto('/');
      // Click the search icon instead of using Control+K
    const searchButton = page.locator('button.DocSearch-Button');
    await searchButton.click();

    // Type into the search input
    const searchBox = page.locator('input[placeholder="Search docs"]');
    await searchBox.fill('test generator');

    // Verify that search results appear
    const results = page.locator('.DocSearch-Hit');
    await expect(results.first()).toBeVisible();
});
