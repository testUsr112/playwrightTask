import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Feature: Product sorting', () => {
    test('Sort alphabetically in ascending order', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.sortAsc();
        let names = await homePage.getProductNames();
        let sortedNames = names.sort();
        expect(names).toEqual(sortedNames);
    });
});