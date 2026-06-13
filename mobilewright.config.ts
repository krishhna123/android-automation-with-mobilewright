import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'android',
  deviceName: process.env.CI ? /./ : /Pixel 10 Pro XL/,
  bundleId: 'com.wdiodemoapp',
  timeout: 120_000,
  retries: process.env.CI ? 0 : 1,
  workers: process.env.CI ? 1 : 2,
});
