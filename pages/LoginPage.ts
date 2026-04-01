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
    this.errorMessage = page.locator('p:has-text("Your email or password is incorrect")');
    // Теперь ищем текст "Logged in as" независимо от регистра
    this.loggedInText = page.getByText(/Logged in as/i);
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}