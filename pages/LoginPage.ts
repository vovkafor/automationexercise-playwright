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
    
    // Ищем любой элемент li, внутри которого есть текст "Logged in as"
    // Это самый надежный способ для этого сайта
    this.loggedInText = page.locator('li', { hasText: 'Logged in as' });
    
    this.errorMessage = page.locator('p[style*="color: red"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    // Кликаем и ждем, пока элемент статуса логина появится в DOM
    await Promise.all([
      this.loginButton.click(),
      this.loggedInText.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
    ]);
  }
}