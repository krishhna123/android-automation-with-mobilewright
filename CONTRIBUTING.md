# Contributing

Welcome! This is an Android mobile automation test suite using [Mobilewright](https://mobilewright.dev), a Playwright-inspired framework for mobile apps. Whether you're learning mobile test automation or want to add test coverage, this guide will help you get started.

For questions or ideas, open an [issue](https://github.com/krishhna123/android-automation-with-mobilewright/issues).

## Prerequisites & Setup

- **Node.js** >= 18
- **Android emulator or real device** — must be booted before running tests
- **WDIO Native Demo APK** — download from [native-demo-app releases](https://github.com/webdriverio/native-demo-app/releases) and place in `test-app/`

```bash
npm install
npx mobilewright doctor   # verify device and setup
```

## Running Tests

```bash
npx mobilewright test                              # run all tests
npx mobilewright test tests/specs/<file>.test.ts   # run a single test file
npx mobilewright test --reporter html              # run with HTML report
```

## Two Ways to Write Tests

### 1. Direct (Playwright-style)

Mobilewright follows Playwright's API conventions. If you're familiar with Playwright, you can write tests the same way — Page Object Models, fixtures, and assertions all follow the same patterns.

- Study the [Playwright docs](https://playwright.dev/docs/intro) for patterns and best practices
- Look at the existing code in `tests/` for real examples:
  - `tests/page-objects/` — POM classes exposing semantic locators
  - `tests/fixtures/` — reusable fixtures with auto-waiting
  - `tests/specs/` — test files that import from fixtures

### 2. AI-Assisted (Mobile MCP)

This repo includes a pre-configured [Mobile MCP](https://github.com/mobile-next/mobile-mcp) server in `opencode.json`. When using OpenCode, the MCP server lets you:

- Inspect the device screen and discover UI elements
- Tap, type, swipe, and interact with the app directly
- Generate tests with AI assistance based on what's on screen

To use it, simply open this repo in OpenCode — the MCP server connects automatically to your device.

## Where to Start

Check out issues labeled [good first issue](https://github.com/krishhna123/android-automation-with-mobilewright/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22good%20first%20issue%22) — these are beginner-friendly tasks to help you get familiar with the codebase.

## Code Style

This project uses **Prettier** for formatting. Run before committing:

```bash
npx prettier --write .
```

**Import conventions:**

- Test files import `fixtures` and `expect` from the fixture files, never directly from `@mobilewright/test`
- Use semantic locators — `getByText`, `getByRole`, `getByTestId` — over raw coordinates or XPath

## Project Structure

See the [README](README.md#project-structure) for the project layout.

## Pull Requests

This repo uses a pull request template — when you open a PR, it will be pre-populated with the required sections.
