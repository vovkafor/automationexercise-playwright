# Loom Video Script — Playwright Framework Demo
# Длительность: ~4 минуты | Говоришь по-английски свободно

===========================================================
ПЕРЕД ЗАПИСЬЮ — подготовь экран:
- Открой VS Code с проектом
- Открой терминал внутри VS Code
- Открой GitHub репо в браузере (другая вкладка)
- Размер шрифта в VS Code: увеличь до 16–18px (Ctrl+= несколько раз)
===========================================================

---

## [0:00 – 0:30] ОТКРЫТИЕ — покажи репо на GitHub

Смотришь в камеру (или просто говоришь):

"Hey! In this video I'm going to walk you through
the Playwright automation framework I built for
automationexercise.com — a real e-commerce site.

I'll show you the architecture, how the tests are
organized, and then run them live so you can see
everything in action. Let's get into it."

→ ДЕЙСТВИЕ: переключись на вкладку GitHub, покажи репо
→ Прокрути README — пусть клиент увидит структуру и бейдж

---

## [0:30 – 1:30] АРХИТЕКТУРА — покажи VS Code

→ ДЕЙСТВИЕ: переключись на VS Code, открой дерево файлов слева

"So here's the project structure. I'm following the
Page Object Model pattern — which means each page
of the application has its own class."

→ ДЕЙСТВИЕ: открой pages/LoginPage.ts

"For example — this is the Login page object.
All the locators are defined here: the email input,
password input, the submit button.

And here — the login() method. It fills the form
and clicks submit. Simple, clean, reusable."

→ ДЕЙСТВИЕ: открой fixtures/base.fixture.ts

"Then I have fixtures — this is where I wire up
the page objects so every test gets them automatically.
No copy-paste, no boilerplate."

→ ДЕЙСТВИЕ: открой tests/login.spec.ts

"And here are the actual tests. You can see they
read almost like plain English —
'valid credentials log the user in',
'invalid password shows error message'.
That's the power of Page Object Model."

---

## [1:30 – 2:45] ЖИВОЙ ЗАПУСК — самая важная часть

→ ДЕЙСТВИЕ: переключись на терминал в VS Code

"Now let me run the tests live."

→ ПЕЧАТАЙ: npx playwright test --headed

"I'm running with --headed so you can see
the browser opening and the tests executing in real time."

→ ПАУЗА — дай тестам запуститься, браузер откроется автоматически
→ Комментируй что видишь:

"So here — Playwright just opened Chrome,
it's navigating to the login page...
filling in the credentials... and boom —
logged in successfully, test passes."

"Now the next one — invalid password.
It fills in wrong credentials, submits,
and we're asserting the error message appears.
Green. Perfect."

→ Когда все тесты закончатся:

"All tests passed. Let me show you the HTML report."

→ ПЕЧАТАЙ: npx playwright show-report

"This is the built-in Playwright report.
Every test, execution time, and if anything fails —
you get screenshots and video automatically."

---

## [2:45 – 3:30] CI/CD — покажи GitHub Actions

→ ДЕЙСТВИЕ: переключись на GitHub, открой вкладку Actions

"The framework is also hooked up to GitHub Actions —
so every time I push code, the tests run automatically
in the cloud."

→ Покажи последний workflow run, нажми на него

"You can see the pipeline here — install, browsers,
run tests, upload report. This is what continuous
integration looks like in practice."

→ Покажи зелёные галочки

"Green across the board."

---

## [3:30 – 4:00] ЗАКРЫТИЕ

→ ДЕЙСТВИЕ: вернись на VS Code, покажи файловое дерево

"So to summarize what you've seen:
Page Object Model for maintainability,
typed fixtures to eliminate boilerplate,
full CI/CD pipeline on GitHub Actions,
and a clean HTML report after every run.

The repo link is in my profile.
Happy to answer any questions — thanks for watching."

---

===========================================================
СОВЕТЫ ДЛЯ ЗАПИСИ:

1. Говори медленнее чем думаешь — на видео всегда кажется быстро
2. Если тест упал — не паникуй, скажи "let me rerun that"
   и запусти ещё раз. Это нормально и выглядит профессионально.
3. Не читай скрипт дословно — это ключевые точки, говори своими словами
4. Если ошибся — продолжай. Не останавливайся и не перезаписывай
   каждые 10 секунд. Небольшие паузы — это нормально.
5. Loom: нажми Record → Screen + Camera → начинай

ФИНАЛЬНЫЙ ЧЕКЛИСТ перед записью:
[ ] VS Code открыт с проектом
[ ] npm install уже выполнен
[ ] Браузеры Playwright установлены (npx playwright install chromium)
[ ] GitHub репо публичное
[ ] Шрифт увеличен в VS Code
[ ] Loom запущен и готов к записи
===========================================================
