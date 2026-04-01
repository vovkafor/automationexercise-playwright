import { test, expect } from '../fixtures/base.fixture';

test.describe('Login functionality', () => {

  test('valid credentials log the user in', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser_ae@gmail.com', 'Test@12345');
    await expect(loginPage.loggedInText).toBeVisible();
  });

  test('invalid password shows error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser_ae@gmail.com', 'wrong_password');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('login page loads with correct title', async ({ loginPage }) => {
    await loginPage.goto();
    await expect(loginPage.page).toHaveTitle(/Automation Exercise/);
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

});
