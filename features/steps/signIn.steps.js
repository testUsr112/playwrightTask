import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

Given('the user is on the Login page', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto();
});

When('the user enters a valid email and password', async function () {
    await this.loginPage.enterEmail('test@test.com');
    await this.loginPage.enterPassword('123Aa45@');
});

When("the user clicks the 'Login' button", async function () {
    await this.loginPage.clickLoginButton();
});

Then('the user should be redirected to account page', async function () {
    await expect(this.page).toHaveURL(/.*account*/);
});