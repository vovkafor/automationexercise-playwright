import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productCards: Locator;
  readonly firstAddToCart: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page                  = page;
    this.searchInput           = page.locator('#search_product');
    this.searchButton          = page.locator('#submit_search');
    this.productCards          = page.locator('.productinfo');
    this.firstAddToCart        = page.locator('.productinfo').first().locator('a.add-to-cart').first();
    this.continueShoppingButton= page.locator('button:has-text("Continue Shopping")');
    this.viewCartLink          = page.locator('a:has-text("View Cart")');
  }

  async goto() {
    await this.page.goto('/products');
  }

  async searchProduct(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async addFirstProductToCart() {
    await this.firstAddToCart.click();
    await this.continueShoppingButton.click();
  }
}
