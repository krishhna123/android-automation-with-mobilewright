# Android Automation with Mobilewright

A basic mobile automation test framework using [Mobilewright](https://mobilewright.dev), a Playwright-inspired automation framework for mobile apps.

## Overview

This project explores the fundamentals of mobile automation testing with Mobilewright. It demonstrates key features including:

- **Fixtures**: Reusable test fixtures for device, screen, and app interaction
- **Page Object Model (POM)**: Organized pattern for maintaining mobile UI element selectors and interactions
- **Simple Setup**: Basic configuration to get started with Android automation

## Project Structure

```
.
├── tests/               # Test files
├── pages/               # Page Object Models
├── fixtures/            # Test fixtures and utilities
├── test_app/            # Android APK under test
├── mobilewright.config.ts
├── package.json
└── tsconfig.json
```

## Test App

Tests target the "General Store" sample Android app (`com.androidsample.generalstore`).

## Getting Started

### Prerequisites

- Node.js >= 18
- Android emulator or real device (must be booted before running tests)

### Installation

```bash
npm install
```

### Run Tests

```bash
# Run all tests
npx mobilewright test

# Run a specific test file
npx mobilewright test tests/example.test.ts

# Run with HTML report
npx mobilewright test --reporter html
```

### Verify Setup

```bash
npx mobilewright doctor
```

## Features Demonstrated

1. **Device Fixture**: Manages device connection, app lifecycle, and orientation
2. **Screen Interaction**: Using semantic locators (getByRole, getByLabel, getByText)
3. **Expect Assertions**: Poll-based assertions with automatic waiting
4. **Page Object Model**: Separation of UI logic from test logic

## Future Planned Implementation

- **GitHub Actions for CI/CD**: Automate test execution on pull requests and merges with GitHub Actions workflows
- **Handling Complex Gestures**: Implement advanced gesture automation including multi-touch, swipe sequences, pinch-to-zoom, and drag-and-drop operations
- **Handling Hardware Scenarios**: Add support for testing hardware-related features like device rotation, hardware buttons, network conditions, and low battery states