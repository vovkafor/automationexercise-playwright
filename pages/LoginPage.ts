import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInText: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    
    // Вместо капризного текста ищем кнопку Logout. 
    // Если она есть — логин прошел успешно!
    this.loggedInText = page.locator('a[href="/logout"]');
    
    this.errorMessage = page.locator('p[style*="color: red"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    // Кликаем и ждем, пока страница полностью загрузится
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'load' }).catch(() => {}),
      this.loginButton.click(),
    ]);
  }
}