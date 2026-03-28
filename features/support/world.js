import { setWorldConstructor, Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser;

class CustomWorld {
  constructor() {
    this.context = null;
    this.page = null;
  }
}

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
});

setWorldConstructor(CustomWorld);