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
    // Используем максимально простой локатор для проверки
    this.loggedInText = page.locator('a[href="/logout"]');
    this.errorMessage = page.locator('p[style*="color: red"]');
  }

  async goto() {
    await this.page.goto('/login', { waitUntil: 'networkidle' });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    
    // Кликаем и даем сайту время «проснуться»
    await this.loginButton.click();
    
    // Если через 3 секунды мы все еще на странице логина — кликаем еще раз
    // (Иногда реклама перехватывает первый клик)
    if (this.page.url().includes('/login')) {
        await this.page.waitForTimeout(2000);
        if (await this.loginButton.isVisible()) {
            await this.loginButton.click().catch(() => {});
        }
    }
    
    // Ждем появления кнопки Logout до 10 секунд
    await this.loggedInText.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  }
}