const { defineConfig } = require('@playwright/test');
const dev = Boolean(process.env.PLAYWRIGHT_DEV);
module.exports = defineConfig({
  testDir: './tests', testMatch: '**/*.spec.cjs', workers: 1, timeout: 60000,
  use: { channel: 'chrome', screenshot: 'only-on-failure', baseURL: 'http://127.0.0.1:4337/angular-material-admin/', viewport: { width: 1440, height: 1000 }, actionTimeout: 10000, navigationTimeout: 20000 },
  webServer: { command: dev ? 'npm start -- --port 4337' : 'node tests/serve.cjs', url: 'http://127.0.0.1:4337/angular-material-admin/', timeout: 120000 },
});
