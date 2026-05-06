import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  timeout: 10000,
  use: {
    headless: false,
    baseURL: process.env.BASE_URL,
  },
});
