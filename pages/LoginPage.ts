import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly loggedInText: Locator;

  constructor(page: Page) {
    this.page         = page;
    this.emailInput   = page.locator('input[data-qa="login-email"]');
    this.passwordInput= page.locator('input[data-qa="login-password"]');
    this.loginButton  = page.locator('button[data-qa="login-button"]');
    this.errorMessage = page.locator('[style*="color: red"]'); // более гибкий поиск ошибки
    // Ищем строку, которая содержит "Logged in as" в меню
    this.loggedInText = page.locator('li:has-text("Logged in as"), a:has-text("Logged in as")').first();
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // Ждем завершения навигации после логина
    await this.page.waitForLoadState('networkidle');
  }
}