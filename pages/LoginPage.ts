import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInText: Locator;

  constructor(page: Page) {
    this.page          = page;
    this.emailInput    = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton   = page.locator('button[data-qa="login-button"]');
    
    // Ищем элемент списка, в котором есть иконка пользователя (fa-user) 
    // и текст "Logged in as". Это 100% сработает.
    this.loggedInText  = page.locator('li:has(.fa-user):has-text("Logged in as")');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // Ждем, пока сайт нас пропустит дальше
    await this.page.waitForLoadState('networkidle');
  }
}