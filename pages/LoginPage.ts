import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInText: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page          = page;
    this.emailInput    = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton   = page.locator('button[data-qa="login-button"]');
    
    // Исправленный локатор статуса логина
    this.loggedInText  = page.locator('li:has(.fa-user):has-text("Logged in as")');
    
    // Локатор ошибки (текст под кнопкой логина)
    this.errorMessage  = page.locator('form[action="/login"] p[style*="color: red"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}