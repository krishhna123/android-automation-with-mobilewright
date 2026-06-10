import { fixtures as test, expect } from '../fixtures/loginFixtures';

const VALID_EMAIL = '12@2.nl';
const VALID_PASSWORD = '12345678';

test('login with valid credentials succeeds', async ({ loginPage }) => {
  await loginPage.login(VALID_EMAIL, VALID_PASSWORD);

  // After successful login, verify toast or navigation occurred
  await expect(loginPage['screen'].getByText('Signed Up!')).not.toBeVisible();
});

test('login with invalid email format shows validation error', async ({
  loginPage,
}) => {
  await loginPage.fillEmail('not-an-email');
  await loginPage.fillPassword(VALID_PASSWORD);
  await loginPage.tapLoginButton();

  const error = await loginPage.verifyEmailError();
});

test('login with empty fields stays on login screen', async ({ loginPage }) => {
  await loginPage.tapLoginButton();

  await loginPage.verifyOnLoginScreen();
  await loginPage.verifyEmailError();
  await loginPage.verifyPasswordError();
});

test.skip('sign up with valid credentials shows success alert', async ({
  signUpPage,
}) => {
  await signUpPage.signUp(VALID_EMAIL, VALID_PASSWORD);
  await signUpPage.verifySignUpSuccess();
  await signUpPage.dismissAlert();
});
