import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  loginButton = () => this.page.getByRole('button', { name: /login/i });
  registerButton = () => this.page.getByRole('button', { name: /register/i });

  async open() {
    await this.goto('/');
  }

  async goToLogin() {
    await this.loginButton().click();
  }

  async goToRegister() {
    await this.registerButton().click();
  }
}