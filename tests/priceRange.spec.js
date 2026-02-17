import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Feature: Price Range filter', () => {
    test('Filter products by price range', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.setMinPrice(50);
        for (let price of await homePage.getProdPrices()) {
            expect(price).toBeGreaterThanOrEqual(50);
            expect(price).toBeLessThanOrEqual(100);
        }
    });
});