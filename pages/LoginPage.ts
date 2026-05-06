import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  uri = 'auth/login'
  emailInput = () => this.page.getByLabel(/email/i);
  passwordInput = () => this.page.getByLabel(/password/i);
  submitButton = () => this.page.getByRole('button', { name: /login/i });

  async login(email: string, password: string) {
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.submitButton().click();
  }
}