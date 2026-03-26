import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';

test.describe('Feature: Product details page', () => {
    test('View product details', async ({ page }) => {
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        await homePage.goto();
        await page.waitForLoadState('networkidle');
        await homePage.clickFirstProduct();
        await expect(page).toHaveURL(/.*product.*/);
        await expect(productPage.productName).toBeVisible();
        await expect(productPage.productImage).toBeVisible();
        await expect(productPage.productPrice).toBeVisible();
        await expect(productPage.productDescription).toBeVisible();
    });
});