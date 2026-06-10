# AGENTS.md

## Project

Android automation test suite using [Mobilewright](https://mobilewright.dev) (Playwright-inspired mobile framework). Two target apps:

- **General Store** (`com.androidsample.generalstore`) — config: `mobilewright.config.ts`
- **WDIO Native Demo** (`com.wdiodemoapp`) — config: `mobilewright.wdio.config.ts`

## Commands

```bash
npx mobilewright test                              # run all tests
npx mobilewright test tests/specs/<file>.test.ts   # run single test
npx mobilewright test --reporter html              # run with HTML report
npx mobilewright doctor                            # verify device/setup
npx prettier --write .                             # format all files
```

- WDIO tests handle app switching via `device.launchApp()` in the fixture, so they work with the default config. The `--config=mobilewright.wdio.config.ts` flag is optional and useful when running WDIO tests in isolation.

## Architecture

```
mobilewright.config.ts              # General Store config
mobilewright.wdio.config.ts         # WDIO Native Demo config
tests/
├── fixtures/
│   ├── pageFixtures.ts             # General Store fixtures
│   └── loginFixtures.ts            # WDIO login/signup fixtures
├── page-objects/*.ts               # Page Object Model classes
└── specs/*.test.ts                  # test files
```

- Fixtures files (`pageFixtures.ts`, `loginFixtures.ts`) export `fixtures` (extended `test`) and `expect` — tests import only from here, never directly from `@mobilewright/test`.
- Each POM class takes a `Screen` and exposes interaction methods using semantic locators (`getByText`, `getByRole`, `getByTestId`).
- `fixtures.extend` provides automatic dependency injection: `productPage` fixture depends on `registrationPage` and `user`; `cartPage` fixture depends on `screen`.
- Fixtures auto-wait for expected UI state before yielding the page object (e.g., `productPage` waits for "Products" to be visible).

## Prerequisites

- Android emulator or real device **must be booted** before running tests.
- No local APK or tsconfig.json in the repo — TypeScript resolution relies on `@mobilewright/test` built-in config.

## Tooling

- **Formatter**: Prettier only (`.prettierrc`). No ESLint, no typecheck step.
- **MCP**: `mobile-mcp` server configured in `opencode.json` for device interaction via OpenCode.
