# Automation Exercise — Playwright Test Framework

![Tests](https://github.com/YOUR_USERNAME/automationexercise-playwright/actions/workflows/playwright.yml/badge.svg)

End-to-end test suite for [automationexercise.com](https://automationexercise.com) built with Playwright and TypeScript.

## What's covered

- **Authentication** — login with valid/invalid credentials, error handling
- **Products** — page load, search functionality, add to cart
- **Shopping cart** — item count, cart persistence
- **Home page** — navigation, newsletter subscription

## Architecture

```
ae-framework/
├── pages/                  # Page Object Models
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
├── tests/                  # Test suites
│   ├── home.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── fixtures/
│   └── base.fixture.ts     # Shared page fixtures
├── .github/workflows/
│   └── playwright.yml      # CI pipeline
└── playwright.config.ts
```

## Run locally

```bash
npm install
npx playwright install chromium
npx playwright test --headed     # with visible browser
npx playwright show-report       # open HTML report
```

## Design decisions

**Page Object Model** — each page is a class. Tests read like plain English. If the UI changes, only one file needs updating.

**Typed fixtures** — pages are injected automatically via `test.extend()`. No boilerplate in every test file.

**Headed mode for demo** — config runs with `headless: false` so you can see the browser in action.
