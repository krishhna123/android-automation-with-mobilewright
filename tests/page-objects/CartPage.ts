import {type  Screen , expect} from '@mobilewright/core';

export class CartPage {
  readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  async waitForCartPage(): Promise<void> {
    // Wait for cart title to be visible
    await expect(this.screen.getByText('Cart')).toBeVisible();
  }

  async getProductName(): Promise<string> {
    const productNameElement = this.screen.getByTestId('$com.androidsample.generalstore:id/productName');
    return await productNameElement.getText() || '';
  }

  async getProductPrice(): Promise<string> {
    const productPriceElement = this.screen.getByTestId('$com.androidsample.generalstore:id/productPrice');
    return await productPriceElement.getText() || '';
  }

  async getTotalPriceSection(): Promise<void> {
    await expect(this.screen.getByText('Total Purchase Amount:')).toBeVisible();
  }

  async longPressTermsButton(): Promise<void> {
    const termsButton = this.screen.getByTestId('$com.androidsample.generalstore:id/termsButton');
    await termsButton.longPress({duration : 2_000})
  }

  async acceptTerms(): Promise<void> {
    // Accept the terms dialog - typically an OK button
    await this.screen.getByRole('button', {name : 'Accept Terms'}).tap();
  }

  async checkTermsBox(): Promise<void> {
    const checkbox = this.screen.getByRole('checkbox', {name : 'select terms'});
    await checkbox.tap();
  }

  async placeOrder(): Promise<void> {
    await this.screen.getByRole('button', {name : 'Place Order'}).tap();
  }
}