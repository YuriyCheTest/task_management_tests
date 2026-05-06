import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  uri = 'auth/register'

  constructor(page: Page) {
    super(page);
  }

  emailInput = () => this.page.getByRole('textbox', { name: /email/i});
  passwordInput = () => this.page.getByRole('textbox', { name: 'Password', exact: true});
  passwordConfirmInput = () => this.page.getByRole('textbox', { name: 'Confirm Password', exact: true });
  submitButton = () => this.page.getByRole('button', { name: 'Create an account' });

  getUrl() {
    return `${this.baseUrl}/auth/register`;
  }

  async register(email: string, password: string) {
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.passwordConfirmInput().fill(password);
    await this.submitButton().click();
  }
}