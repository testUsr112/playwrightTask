import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Feature: Sign In', () => {
    test('Sign in with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.enterEmail('test@test.com');
        await loginPage.enterPassword('123Aa45@');
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL(/.*account*/);
    });
});