import { test as base, expect } from '@mobilewright/test';
import { RegistrationPage } from '../page-objects/registrationPage';

const fixtures = base.extend<{
  registrationPage: RegistrationPage;
}>({
  registrationPage: async ({ screen }, use) => {
    await expect(screen.getByText('General Store')).toBeVisible();
    await expect(
      screen.getByText('Select the country where you want to shop'),
    ).toBeVisible();

    const registrationPage = new RegistrationPage(screen);

    await use(registrationPage);
  },
});

export { fixtures };
