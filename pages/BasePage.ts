import { Page, expect } from '@playwright/test';

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
    await this.page.goto(this.getUrl());
  }

  async verify_at_page() {
    await expect(this.page,'Successful registration should redirect to Dashboard page').toHaveURL(this.getUrl(), { timeout: 20000 });
  }
}