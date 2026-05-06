import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { getCurrentDateTimeString } from '../utils/utils';
import { DashboardPage } from '../pages/DashboardPage';

test('open login page and fill form', async ({ page }) => {
  const login = new LoginPage(page);
  
  await login.goto();
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  const dashboard = new DashboardPage(page)
  await dashboard.verify_at_page();
  //await page.context().storageState({ path: 'state.json' });
});

test('open register page and fill form', async ({ page }) => {
  const register = new RegisterPage(page);

  await register.goto();
  await register.register(`test_${getCurrentDateTimeString()}@test.com`, '12345678');

  await expect(page,'Successful registration should redirect to Dashboard page').toHaveURL(/\/dashboard/);
});
