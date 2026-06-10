import { test as base, expect } from '@mobilewright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { SignUpPage } from '../page-objects/SignUpPage';

export type LoginTestOptions = {
  loginPage: LoginPage;
  signUpPage: SignUpPage;
};

const fixtures = base.extend<LoginTestOptions>({
  loginPage: async ({ screen }, use) => {
    await expect(
      screen.getByText('Demo app for the appium-boilerplate'),
    ).toBeVisible();

    // Navigate from Home screen to Login screen via bottom nav
    await screen.getByText('Login').tap();

    await expect(screen.getByText('Login / Sign up Form')).toBeVisible({
      timeout: 15000,
    });
    await expect(screen.getByText('LOGIN')).toBeVisible();

    const loginPage = new LoginPage(screen);
    await loginPage.navigateToLoginTab();
    await use(loginPage);
  },

  signUpPage: async ({ screen, device }, use) => {
    await expect(
      screen.getByText('Demo app for the appium-boilerplate'),
    ).toBeVisible();

    // Navigate from Home screen to Login screen via bottom nav
    await screen.getByText('Login').tap();

    await expect(screen.getByText('Login / Sign up Form')).toBeVisible({
      timeout: 15000,
    });

    const signUpPage = new SignUpPage(screen);
    await signUpPage.navigateToSignUpTab();
    await use(signUpPage);
  },
});

export { fixtures, expect };
