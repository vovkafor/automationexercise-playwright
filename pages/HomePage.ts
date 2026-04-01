import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navCart: Locator;

  constructor(page: Page) {
    this.page    = page;
    this.logo    = page.locator('.logo img');
    this.navCart = page.locator('.shop-menu .nav >> text=Cart').first();
  }

  async goto() {
    // На этом сайте главная страница иногда долго грузит рекламу, 
    // поэтому используем 'commit', чтобы просто дождаться начала перехода
    await this.page.goto('/', { waitUntil: 'commit' });
  }
}