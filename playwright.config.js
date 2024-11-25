// @ts-nocheck
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    headless: false,
    video: 'off',
    screenshot: 'only-on-failure',
    viewport: null,
    trace: 'on-first-retry', // Optional: Collect trace for debugging
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {browserName: 'chromium'},
      viewport: null
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
      viewport: null
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
      viewport:null
    },
  ],

  /* Optional: Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
