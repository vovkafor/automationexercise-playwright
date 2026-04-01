import { test, expect } from '../fixtures/base.fixture';

test.describe('Home page', () => {

  test('home page loads successfully', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.page).toHaveTitle(/Automation Exercise/);
    await expect(homePage.logo).toBeVisible();
  });

  test('navigation links are visible', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.navProducts).toBeVisible();
    await expect(homePage.navCart).toBeVisible();
    await expect(homePage.navSignup).toBeVisible();
  });

  test('newsletter subscription works', async ({ homePage }) => {
    await homePage.goto();
    await homePage.subscribe('testsubscribe_demo@gmail.com');
    await expect(homePage.subscribeSuccess).toBeVisible();
  });

});
