import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage.js';

Given('the user is on the Home page', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.goto();
});

When("the user selects {string} sorting option", async function () {
  await this.homePage.sortAsc();
});

Then('the products are sorted by name in ascending alphabetical order', async function () {
    const names = await this.homePage.getProductNames();
    const sortedNames = names.sort();
    expect(names).toEqual(sortedNames);
  }
);