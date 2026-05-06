import { Page, expect } from '@playwright/test';
import { logger } from '../utils/logger';

export abstract class BasePage {
  protected readonly page: Page;

  protected readonly baseUrl: string  | undefined = process.env.BASE_URL;

  protected uri : string = '';

  constructor(page: Page) {
    this.page = page;
  }

  getUrl(): string {
    return `${this.baseUrl}${this.uri}`;
  }

  async goto() {
    logger.info(`Navigate to ${this.constructor.name} page`);
    await this.page.goto(this.getUrl());
  }

  async verify_at_page() {
    logger.info(`Verifying navigation to ${this.constructor.name} page`);
    await expect(this.page,'Successful registration should redirect to Dashboard page').toHaveURL(this.getUrl(), { timeout: 20000 });
  }
}