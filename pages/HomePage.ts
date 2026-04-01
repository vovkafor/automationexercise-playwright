import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navProducts: Locator;
  readonly navCart: Locator;
  readonly navSignup: Locator;
  readonly navLogout: Locator;
  readonly subscribeEmail: Locator;
  readonly subscribeButton: Locator;
  readonly subscribeSuccess: Locator;

  constructor(page: Page) {
    this.page             = page;
    // Уточнили логотип: ищем картинку внутри ссылки в хедере
    this.logo             = page.locator('.logo img, .navbar-brand img').first();
    this.navProducts      = page.locator('a[href="/products"]');
    // Берем именно ту корзину, которая в верхнем меню
    this.navCart          = page.locator('.shop-menu a[href="/view_cart"]').first();
    this.navSignup        = page.locator('a[href="/login"]');
    this.navLogout        = page.locator('a[href="/logout"]');
    this.subscribeEmail   = page.locator('#susbscribe_email');
    this.subscribeButton  = page.locator('#subscribe');
    this.subscribeSuccess = page.locator('#success-subscribe');
  }

  async goto() {
    await this.page.goto('/');
    // Ждем, пока страница полностью загрузится
    await this.page.waitForLoadState('networkidle');
  }

  async subscribe(email: string) {
    await this.subscribeEmail.scrollIntoViewIfNeeded();
    await this.subscribeEmail.fill(email);
    await this.subscribeButton.click();
  }
}