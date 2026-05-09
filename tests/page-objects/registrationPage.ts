import type { Screen } from '@mobilewright/core';

type user = {
  countryname: string;
  userName: string;
  gender: string;
};

export class RegistrationPage {
  readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  async registerUser(
    user: user,
    isSuccess: boolean = true,
    errorMessage: string = '',
  ): Promise<void> {
    await this.selectCountry(user.countryname);
    if (user.userName)
      await this.screen.getByText('Enter name here').fill(user.userName);
    await this.selectGender(user.gender);
    await this.screen.getByText("Let's  Shop").tap();

    if (!isSuccess && errorMessage) {
      await this.screen.getByText(errorMessage);
    }
  }

  async selectCountry(countryName: string): Promise<void> {
    await this.screen.getByText('Afghanistan').tap();
    await this.screen.getByText(countryName).tap();
  }

  async selectGender(gender: string): Promise<void> {
    await this.screen.getByText(gender).tap();
  }
}
