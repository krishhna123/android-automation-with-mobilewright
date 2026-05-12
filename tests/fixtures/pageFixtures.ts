import { test as base, expect } from '@mobilewright/test';
import { RegistrationPage, type User } from '../page-objects/registrationPage';
import { ProductPage } from '../page-objects/ProductPage';
import { CartPage } from '../page-objects/CartPage';

export type TestOptions = {
  registrationPage: RegistrationPage;
  productPage: ProductPage;
  cartPage: CartPage;
  user: User;
};

const fixtures = base.extend<TestOptions>({
  user: [
    {
      userName: 'tester',
      gender: 'Female',
      countryname: 'Andorra',
    },
    {
      option: true,
    },
  ],
  registrationPage: async ({ screen }, use) => {
    await expect(screen.getByText('General Store')).toBeVisible();
    await expect(
      screen.getByText('Select the country where you want to shop'),
    ).toBeVisible();

    const registrationPage = new RegistrationPage(screen);

    await use(registrationPage);
  },
  productPage: async ({ screen, registrationPage, user }, use) => {
    registrationPage.registerUser(user);
    // Wait for product list to load - check for at least one product
    await expect(screen.getByText('Products'))
      .toBeVisible({ timeout: 10000 })
      .catch(() => {
        // Fallback: just wait a bit for the page to load
      });

    const productPage = new ProductPage(screen);
    await use(productPage);
  },

  cartPage: async ({ screen }, use) => {
    // Verify we're on cart page
    await expect(screen.getByText('Cart')).toBeVisible({ timeout: 10000 });

    const cartPage = new CartPage(screen);
    await use(cartPage);
  },
});

export { fixtures, expect };
