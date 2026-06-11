import { faker } from '@faker-js/faker';
import { fixtures as test, expect } from '../fixtures/loginFixtures';
import { SignUpPage } from '../page-objects/SignUpPage';

const VALID_EMAIL = '12@2.nl';
const VALID_PASSWORD = '12345678';
const SHORT_PASSWORD = '12345';

test('Login / Sign up Form screen loads with both tabs', async ({
  loginFormPage,
}) => {
  await loginFormPage.verifyFormScreenLoaded();
});

test('login with valid credentials succeeds', async ({ loginPage }) => {
  await loginPage.login(VALID_EMAIL, VALID_PASSWORD);
  await loginPage.verifyLoginSuccess();
});

test('login with invalid email format shows validation error', async ({
  loginPage,
}) => {
  await loginPage.fillEmail('not-an-email');
  await loginPage.fillPassword(VALID_PASSWORD);
  await loginPage.tapLoginButton();
  await loginPage.verifyEmailError();
});

test('login with empty fields stays on login screen', async ({ loginPage }) => {
  await loginPage.tapLoginButton();
  await loginPage.verifyOnLoginScreen();
  await loginPage.verifyEmailError();
  await loginPage.verifyPasswordError();
});

test('login with password less than 8 characters shows validation error', async ({
  loginPage,
}) => {
  await loginPage.fillEmail(VALID_EMAIL);
  await loginPage.fillPassword(SHORT_PASSWORD);
  await loginPage.tapLoginButton();
  await loginPage.verifyPasswordError();
});

test('Sign up tab is switchable and sign up form is displayed', async ({
  loginPage,
}) => {
  const signUpPage = new SignUpPage(loginPage.screen);

  await loginPage.switchToSignUpTab();
  await signUpPage.verifySignUpFormDisplayed();
});

test('sign up with valid credentials shows success alert', async ({
  signUpPage,
}) => {
  const email = faker.internet.email();
  const password = faker.internet.password({ length: 10 });

  await signUpPage.signUp(email, password);
  await signUpPage.verifySignUpSuccess();
  await signUpPage.dismissAlert();
});

test('biometrics hint text is visible on the Login screen', async ({
  loginPage,
}) => {
  await loginPage.verifyBiometricsHint();
});
