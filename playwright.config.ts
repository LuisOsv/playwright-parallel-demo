import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  retries: 1,
  workers: 2, // Local parallel execution; GitHub Actions can override this
  reporter: process.env.CI ? 'blob' : 'html', // Use 'blob' to have individual reports per shard in CI

  use: {
    baseURL: 'https://playwright.dev',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
