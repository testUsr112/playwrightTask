export class HomePage {

    constructor(page) {
        this.page = page;
        this.minPrice = page.locator('.ngx-slider-span.ngx-slider-bar.ngx-slider-selection');
        this.productPrices = page.locator('data-test="product-price"').all();
        this.sortingDropdown = page.locator('[data-test="sort"]');
        this.productNames = page.locator('[data-test="product-name"]').all();
        this.firstProduct = page.locator('.card').first();
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async setMinPrice(minPrice) {
        await this.minPrice.click();
        for (let i = 0; i < minPrice; i++) {
            await this.page.keyboard.press('ArrowRight');
        }
    }

    async getProdPrices() {
        let prices = [];
        for (let p of await this.productPrices) {
            prices.push(p.textContent());
        }
        return prices;
    }

    async sortAsc() {
        await this.sortingDropdown.selectOption('name,asc');
    }

    async getProductNames() {
        let names = [];
        for (p of await this.productNames) {
            names.push(p.getText());
        }
        return names;
    }

    async clickFirstProduct() {
        await this.firstProduct.click();
    }
}