import { test as base } from '@playwright/test';
import { LoginPage }    from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage }     from '../pages/CartPage';
import { HomePage }     from '../pages/HomePage';

type Pages = {
  loginPage:    LoginPage;
  productsPage: ProductsPage;
  cartPage:     CartPage;
  homePage:     HomePage;
};

export const test = base.extend<Pages>({
  loginPage:    async ({ page }, use) => { await use(new LoginPage(page));    },
  productsPage: async ({ page }, use) => { await use(new ProductsPage(page)); },
  cartPage:     async ({ page }, use) => { await use(new CartPage(page));     },
  homePage:     async ({ page }, use) => { await use(new HomePage(page));     },
});

export { expect } from '@playwright/test';
