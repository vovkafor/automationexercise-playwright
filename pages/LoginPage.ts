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
    
    // Самый надежный способ: ищем ссылку (a), в которой есть текст "Logged in as"
    // даже если внутри есть другие теги типа <b>
    this.loggedInText = page.locator('header a:has-text("Logged in as")');
    
    this.errorMessage = page.locator('p[style*="color: red"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // Ждем, чтобы страница успела обновиться
    await this.page.waitForLoadState('load');
  }
}