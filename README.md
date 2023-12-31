# Code

Example repository using `pnpm`, `turbo`, `nextjs`, and `typescript`.

## Purpose

Set up a monorepo with a `@repo/utils` package that can export from non-root paths.

- Package: `@repo/utils`
- Install via: `"@repo/utils": "workspace:*"`
- Usage example: `import { world } from "@repo/utils/hello"`
