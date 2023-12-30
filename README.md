# Code

Example repository using `pnpm`, `turbo`, `nextjs`, and `typescript`.

## Purpose

Set up a monorepo with a `@company/utils` package that can export modules from non-root paths.

- Package: `@company/utils`
- Install via: `"@company/utils": "workspace:*"`
- Usage example: `import { world } from "@company/utils/hello"`
