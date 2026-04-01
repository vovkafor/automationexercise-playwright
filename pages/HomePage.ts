import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navProducts: Locator;
  readonly navCart: Locator;
  readonly navSignup: Locator;
  readonly subscribeEmail: Locator;
  readonly subscribeButton: Locator;
  readonly subscribeSuccess: Locator;

  constructor(page: Page) {
    this.page             = page;
    this.logo             = page.locator('.logo img');
    this.navProducts      = page.locator('a[href="/products"]');
    this.navCart          = page.locator('.shop-menu .nav >> text=Cart').first();
    this.navSignup        = page.locator('a[href="/login"]');
    this.subscribeEmail   = page.locator('#susbscribe_email');
    this.subscribeButton  = page.locator('#subscribe');
    this.subscribeSuccess = page.locator('#success-subscribe');
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async subscribe(email: string) {
    await this.subscribeEmail.scrollIntoViewIfNeeded();
    await this.subscribeEmail.fill(email);
    await this.subscribeButton.click();
  }
}