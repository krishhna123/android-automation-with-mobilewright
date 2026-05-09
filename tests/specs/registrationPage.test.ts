import { fixtures as test } from '../fixtures/pageFixtures';

test('login the appliation by filling the form', async ({
  registrationPage,
}) => {
  await registrationPage.registerUser(
    { countryname: 'Andorra', userName: 'tester', gender: 'Female' },
    true,
  );
});

test('error message on incomplete form', async ({ registrationPage }) => {
  await registrationPage.registerUser(
    { countryname: 'Afghanistan', userName: '', gender: 'Male' },
    false,
    'Please enter your name',
  );
});
