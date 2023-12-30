# Code

Example repo using `pnpm`, `turbo`, `nextjs`, and `typescript`.

## Purpose

Setup a monorepo using these technologies and create a `@company/utils` package
within the workspace that can group modules and works with the build system.

- With a package named: `@company/utils`
- Install in `package.json` via: `"@company/utils": "workspace:*"`
- And this works: `import { world } from "@company/utils/hello"`
