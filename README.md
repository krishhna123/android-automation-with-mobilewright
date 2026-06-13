# Android Automation with Mobilewright

Android mobile automation test suite using [Mobilewright](https://mobilewright.dev), a Playwright-inspired automation framework for mobile apps.

## Overview

This project demonstrates mobile automation testing with the **WDIO Native Demo** app. It showcases:

- **Fixtures**: Reusable test fixtures with automatic dependency injection
- **Page Object Model (POM)**: Clean separation of UI selectors and interactions from test logic
- **Semantic locators**: `getByText`, `getByRole`, `getByTestId` for reliable element targeting

## Project Structure

```
.
├── tests/
│   ├── fixtures/
│   │   └── loginFixtures.ts          # Login/signup fixtures
│   ├── page-objects/
│   │   ├── LoginPage.ts              # Login screen POM
│   │   └── SignUpPage.ts             # Sign-up screen POM
│   └── specs/
│       └── loginTests.test.ts        # Test file
├── test-app/                         # APK directory (gitignored)
├── mobilewright.config.ts            # Mobilewright configuration
└── package.json
```

## Test App

Tests target the **WDIO Native Demo** Android app (`com.wdiodemoapp`).

Download the APK from [native-demo-app releases](https://github.com/webdriverio/native-demo-app/releases) and place it in the `test-app/` directory.

## Getting Started

### Prerequisites

- Node.js >= 18
- Android emulator or real device (must be booted before running tests)
- WDIO Native Demo APK placed in `test-app/`

### Installation

```bash
npm install
```

### Run Tests

```bash
# Run all tests
npx mobilewright test

# Run a specific test file
npx mobilewright test tests/specs/<file>.test.ts

# Run with HTML report
npx mobilewright test --reporter html
```

### Verify Setup

```bash
npx mobilewright doctor
```

## Features Demonstrated

1. **Fixture-based architecture**: Automatic dependency injection via `fixtures.extend` — page objects depend on each other and auto-wait for expected UI state
2. **Page Object Model**: Login and Sign-up screens modeled as reusable POM classes
3. **Screen interaction**: Using semantic locators (`getByRole`, `getByText`, `getByTestId`)
4. **Expect assertions**: Poll-based assertions with automatic retry and waiting

## Future Planned Implementation

- **GitHub Actions for CI/CD**: Automate test execution on pull requests and merges with GitHub Actions workflows
- **Handling Complex Gestures**: Implement advanced gesture automation including multi-touch, swipe sequences, pinch-to-zoom, and drag-and-drop operations
- **Handling Hardware Scenarios**: Add support for testing hardware-related features like device rotation, hardware buttons, network conditions, and low battery states
