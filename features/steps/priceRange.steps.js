import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage.js';

Given('the user is on the Home page', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.goto();
});

When('the user sets the minimum price to {int}', async function () {
  await this.homePage.setMinPrice(50);
});

Then(
  'only products with prices between 50 and 100 are displayed', async function () {
    const prices = await this.homePage.getProdPrices();
    for (const price of prices) {
      expect(price).toBeGreaterThanOrEqual(50);
      expect(price).toBeLessThanOrEqual(100);
    }
  }
);