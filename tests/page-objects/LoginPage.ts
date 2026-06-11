import type { Screen } from '@mobilewright/core';
import { expect } from '@mobilewright/test';

export class LoginPage {
  readonly screen: Screen;

  constructor(screen: Screen) {
    this.screen = screen;
  }

  async navigateToLoginTab(): Promise<void> {
    await this.screen.getByText('Login').first().tap();
  }

  async switchToSignUpTab(): Promise<void> {
    await this.screen.getByText('Sign up').tap();
  }

  async fillEmail(email: string): Promise<void> {
    await this.screen.getByText('Email').fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.screen.getByText('Password').fill(password);
  }

  async tapLoginButton(): Promise<void> {
    await this.screen.getByText('LOGIN').tap();
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.tapLoginButton();
  }

  async verifyFormScreenLoaded(): Promise<void> {
    await expect(this.screen.getByText('Login / Sign up Form')).toBeVisible();
    await expect(this.screen.getByText('Login').first()).toBeVisible();
    await expect(this.screen.getByText('Sign up')).toBeVisible();
  }

  async verifyEmailError(): Promise<void> {
    const errorEl = this.screen.getByText('Please enter a valid email address');
    await expect(errorEl).toBeVisible();
  }

  async verifyPasswordError(): Promise<void> {
    await expect(
      this.screen.getByText('Please enter at least 8 characters'),
    ).toBeVisible();
  }

  async verifyOnLoginScreen(): Promise<void> {
    await expect(this.screen.getByText('Login / Sign up Form')).toBeVisible();
    await expect(this.screen.getByText('LOGIN')).toBeVisible();
  }

  async verifyLoginSuccess(): Promise<void> {
    await expect(this.screen.getByText('Success')).toBeVisible();
    await expect(this.screen.getByText('You are logged in!')).toBeVisible();
    await this.screen.getByText('OK').tap();
  }

  async verifyBiometricsHint(): Promise<void> {
    await expect(
      this.screen.getByText(
        'When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.',
      ),
    ).toBeVisible();
  }
}
