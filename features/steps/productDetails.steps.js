import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage.js';
import { ProductPage } from '../../pages/productPage.js';

Given('the user is on the Home page', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.goto();
});

When('the user clicks on the first product from the gallery', async function () {
  await this.homePage.clickFirstProduct();
  this.productPage = new ProductPage(this.page);
});

Then('the product details page is opened', async function () {
  await expect(this.page).toHaveURL(/.*product.*/);
});

Then('the product name is displayed', async function () {
  await expect(this.productPage.productName).toBeVisible();
});

Then('the product image is displayed', async function () {
  await expect(this.productPage.productImage).toBeVisible();
});

Then('the product price is displayed', async function () {
  await expect(this.productPage.productPrice).toBeVisible();
});

Then('the product description is displayed', async function () {
  await expect(this.productPage.productDescription).toBeVisible();
});