import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly proceedToCheckout: Locator;
  readonly deleteButtons: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page               = page;
    this.cartItems          = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckout  = page.locator('a:has-text("Proceed To Checkout")');
    this.deleteButtons      = page.locator('a.cart_quantity_delete');
    this.emptyCartMessage   = page.locator('#empty_cart');
  }

  async goto() {
    await this.page.goto('/view_cart');
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async removeFirstItem() {
    await this.deleteButtons.first().click();
    await this.page.waitForTimeout(500);
  }
}
