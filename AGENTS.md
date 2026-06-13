# AGENTS.md

## Project

Android automation test suite using [Mobilewright](https://mobilewright.dev) (Playwright-inspired mobile framework). Target app:

- **WDIO Native Demo** (`com.wdiodemoapp`) — config: `mobilewright.config.ts`

## Commands

```bash
npx mobilewright test                              # run all tests
npx mobilewright test tests/specs/<file>.test.ts   # run single test
npx mobilewright test --reporter html              # run with HTML report
npx mobilewright doctor                            # verify device/setup
npx prettier --write .                             # format all files
```

## Architecture

```
mobilewright.config.ts              # WDIO Native Demo config
tests/
├── fixtures/
│   └── loginFixtures.ts            # Login/signup fixtures
├── page-objects/
│   ├── LoginPage.ts                # Login screen POM
│   └── SignUpPage.ts               # Sign-up screen POM
└── specs/
    └── loginTests.test.ts          # Test file
```

- Fixtures file (`loginFixtures.ts`) exports `fixtures` (extended `test`) and `expect` — tests import only from here, never directly from `@mobilewright/test`.
- Each POM class takes a `Screen` and exposes interaction methods using semantic locators (`getByText`, `getByRole`, `getByTestId`).
- `fixtures.extend` provides automatic dependency injection: signup page fixture depends on login page fixture.
- Fixtures auto-wait for expected UI state before yielding the page object.

## Prerequisites

- Android emulator or real device **must be booted** before running tests.
- WDIO Native Demo APK must be placed in `test-app/` directory. Download from [native-demo-app releases](https://github.com/webdriverio/native-demo-app/releases).

## Tooling

- **Formatter**: Prettier only (`.prettierrc`). No ESLint, no typecheck step.
- **MCP**: `mobile-mcp` server configured in `opencode.json` for device interaction via OpenCode.
