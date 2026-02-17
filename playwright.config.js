import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: 2,
  workers: 2,

  reporter: 'html',

  use: {
    headless: true,
    actionTimeout: 10000,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

});

