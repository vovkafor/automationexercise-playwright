import { test, expect } from '../fixtures/base.fixture';

test.describe('Products page', () => {

  test('products page loads and shows items', async ({ productsPage }) => {
    await productsPage.goto();
    await expect(productsPage.page).toHaveURL(/products/);
    const count = await productsPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('search returns relevant results', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.searchProduct('T-Shirt');
    await expect(productsPage.page.locator('.productinfo')).not.toHaveCount(0);
    await expect(productsPage.page.locator('h2.title')).toContainText('Searched Products');
  });

  test('add product to cart shows modal', async ({ productsPage }) => {
    await productsPage.goto();
    await productsPage.addFirstProductToCart();
    // after "Continue Shopping" modal closes — still on products page
    await expect(productsPage.page).toHaveURL(/products/);
  });

});

test.describe('Shopping cart', () => {

  test('cart page is accessible', async ({ cartPage }) => {
    await cartPage.goto();
    await expect(cartPage.page).toHaveURL(/view_cart/);
  });

  test('adding a product increases cart count', async ({ productsPage, cartPage }) => {
    await productsPage.goto();
    await productsPage.addFirstProductToCart();
    await cartPage.goto();
    const count = await cartPage.getItemCount();
    expect(count).toBeGreaterThanOrEqual(1);
  });

});
