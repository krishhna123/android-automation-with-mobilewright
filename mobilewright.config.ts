import { defineConfig } from 'mobilewright';

export default defineConfig({
  platform: 'android',
  deviceName: /Pixel 10 Pro XL/,
  bundleId: 'com.wdiodemoapp',
  timeout: 120_000,
});
