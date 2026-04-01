import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navCart: Locator;

  constructor(page: Page) {
    this.page    = page;
    // Логотип на этом сайте — это картинка внутри .navbar-brand
    this.logo    = page.locator('.logo img');
    // Корзина в верхнем меню (точное попадание)
    this.navCart = page.locator('.shop-menu .nav >> text=Cart');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }
}