import type { Screen } from '@mobilewright/core';

export class SignUpPage {
  readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  async navigateToSignUpTab(): Promise<void> {
    await this.screen.getByText('Sign up').tap();
  }

  async fillEmail(email: string): Promise<void> {
    await this.screen.getByText('Email').fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.screen.getByText('Password').fill(password);
  }

  async fillConfirmPassword(password: string): Promise<void> {
    await this.screen.getByText('Confirm password').fill(password);
  }

  async tapSignUpButton(): Promise<void> {
    await this.screen.getByText('SIGN UP').tap();
  }

  async signUp(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillConfirmPassword(password);
    await this.tapSignUpButton();
  }

  async verifySignUpSuccess(): Promise<void> {
    await this.screen.getByText('Signed Up!');
    await this.screen.getByText('You successfully signed up!');
  }

  async dismissAlert(): Promise<void> {
    await this.screen.getByText('OK').tap();
  }
}
