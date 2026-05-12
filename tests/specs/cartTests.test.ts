import { fixtures as test, expect } from '../fixtures/pageFixtures';

const PRODUCT_NAME = 'Jordan 6 Rings';

test('add product to cart and place order', async ({
  productPage,
  cartPage,
}) => {
  // Step 2: Add product to cart
  await productPage.scrollToProduct(PRODUCT_NAME);
  const productPrice = await productPage.getProductPrice(PRODUCT_NAME);
  await productPage.addProductToCart(PRODUCT_NAME);
  await productPage.clickCartButton();

  // Step 3: Verify cart contents
  await expect(cartPage['screen'].getByText('Cart')).toBeVisible();

  const cartProductName = await cartPage.getProductName();
  expect(cartProductName).toContain(PRODUCT_NAME);

  const cartProductPrice = await cartPage.getProductPrice();
  expect(cartProductPrice).toBe(productPrice);

  // Verify total price section is displayed
  await cartPage.getTotalPriceSection();

  // Step 4: Accept terms and place order
  await cartPage.longPressTermsButton();
  await cartPage.acceptTerms();
  await cartPage.checkTermsBox();
  await cartPage.placeOrder();
});

test('verify cart displays correct product details', async ({
  productPage,
  cartPage,
}) => {
  // Get product price before adding to cart
  const expectedProductPrice = await productPage.getProductPrice(PRODUCT_NAME);

  // Add product to cart and navigate to cart
  await productPage.addProductToCart(PRODUCT_NAME);
  await productPage.clickCartButton();

  // Verify product name and price match
  const actualProductName = await cartPage.getProductName();
  const actualProductPrice = await cartPage.getProductPrice();

  expect(actualProductName).toContain(PRODUCT_NAME);
  expect(actualProductPrice).toBe(expectedProductPrice);
});
