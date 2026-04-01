# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login functionality >> invalid password shows error message
- Location: tests/login.spec.ts:11:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[data-qa="login-button"]')
    - locator resolved to <button type="submit" data-qa="login-button" class="btn btn-default">Login</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-consent-root">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-consent-root">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    46 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="fc-dialog-overlay"></div> from <div class="fc-consent-root">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]: testuser_ae@gmail.com
        - textbox "Password" [ref=e45]: wrong_password
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - dialog "This site asks for consent to use your data" [ref=e75]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - paragraph [ref=e80]: Welcome
        - heading "This site asks for consent to use your data" [level=1] [ref=e81]
      - list [ref=e83]:
        - listitem [ref=e84]:
          - img [ref=e87]
          - generic [ref=e89]: Personalised advertising and content, advertising and content measurement, audience research and services development
        - listitem [ref=e90]:
          - img [ref=e93]
          - generic [ref=e95]: Store and/or access information on a device
      - button "Learn more" [ref=e96] [cursor=pointer]:
        - img [ref=e99]
        - generic [ref=e101]: Learn more
      - generic [ref=e102]:
        - paragraph [ref=e103]:
          - text: Your personal data will be processed and information from your device (cookies, unique identifiers, and other device data) may be stored by, accessed by and shared with 211 partners, or used specifically by this site. We and our partners may use precise geolocation data.
          - button "List of partners." [ref=e104] [cursor=pointer]
        - paragraph [ref=e105]: Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in the site menu to manage or withdraw consent in privacy and cookie settings.
    - generic [ref=e108]:
      - button "Consent" [ref=e109] [cursor=pointer]:
        - paragraph [ref=e111]: Consent
      - button "Manage options" [active] [ref=e112] [cursor=pointer]:
        - paragraph [ref=e114]: Manage options
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly emailInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly errorMessage: Locator;
  9  |   readonly loggedInText: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page         = page;
  13 |     this.emailInput   = page.locator('input[data-qa="login-email"]');
  14 |     this.passwordInput= page.locator('input[data-qa="login-password"]');
  15 |     this.loginButton  = page.locator('button[data-qa="login-button"]');
  16 |     this.errorMessage = page.locator('p:has-text("Your email or password is incorrect")');
  17 |     this.loggedInText = page.locator('a:has-text("Logged in as")');
  18 |   }
  19 | 
  20 |   async goto() {
  21 |     await this.page.goto('/login');
  22 |   }
  23 | 
  24 |   async login(email: string, password: string) {
  25 |     await this.emailInput.fill(email);
  26 |     await this.passwordInput.fill(password);
> 27 |     await this.loginButton.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |   }
  29 | }
  30 | 
```