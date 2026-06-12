import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'android',
  deviceName: /Pixel 10 Pro XL/,
  bundleId: 'com.wdiodemoapp',
  timeout: 120_000,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 2,
});
