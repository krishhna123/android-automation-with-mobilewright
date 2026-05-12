import type { Screen } from '@mobilewright/core';

export class ProductPage {
  readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  async scrollToProduct(productName: string): Promise<void> {
    // Mobilewright uses scroll action to find elements
    await this.screen
      .getByText(productName, { exact: false })
      .scrollIntoViewIfNeeded();
  }

  async addProductToCart(productName: string): Promise<void> {
    // Find the product and tap the add to cart button
    const productCard = this.screen.getByText(productName, { exact: false });
    await productCard.tap();

    // After tapping product, the add to cart button should appear
    // We need to find and tap the add to cart button
    // The button typically has text "ADD TO CART" or similar
    await this.screen.getByText('ADD TO CART').tap();
  }

  async getProductPrice(productName: string): Promise<string> {
    // Get price text near the product name
    const priceLocator = this.screen.getByText(productName, { exact: false });
    // The price is typically displayed next to or below the product name
    // We need to find the price element - it might be a sibling or nearby
    // For now, we'll use a placeholder that needs to be verified against the app
    const priceText = await this.screen.getByTestId('$com.androidsample.generalstore:id/productPrice').first().getText();
    return priceText || '';
  }

  async clickCartButton(): Promise<void> {
    await this.screen.getByText('Cart').tap();
  }
}