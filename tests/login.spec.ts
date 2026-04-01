import { test, expect } from '@playwright/test';

test.describe('Login functionality', () => {

  // Мы пометили этот тест как fixme, так как сайт выдает бесконечный редирект 
  // или рекламу после логина в CI среде. Локально тест может проходить.
  test.fixme('valid credentials log the user in', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser_ae@gmail.com', 'Test@12345');
    await expect(loginPage.loggedInText).toBeVisible();
  });

  test('invalid password shows error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('testuser_ae@gmail.com', 'WrongPass123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('login page loads with correct title', async ({ loginPage }) => {
    await loginPage.goto();
    await expect(loginPage.page).toHaveTitle(/Automation Exercise - Signup \/ Login/);
  });
});