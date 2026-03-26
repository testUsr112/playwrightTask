export class ProductPage {

    constructor(page) {
        this.page = page;
        this.productName = page.locator('[data-test="product-name"]');
        this.productImage = page.locator('.figure-img.img-fluid');
        this.productPrice = page.locator('[data-test="unit-price"]');
        this.productDescription = page.locator('[data-test="product-description"]');
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}