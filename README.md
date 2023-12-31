# Code

Example repository using `pnpm`, `turbo`, `nextjs`, and `typescript`.

- Based on [@vercel/turbo/examples/basic](https://github.com/vercel/turbo/tree/1e77bab3cd15cfde51b46a3ba477fc2e886f79b0/examples/basic)

## Purpose

Set up a monorepo with a `@repo/utils` package that can export from non-root paths.

- Package: `@repo/utils`
- Install via: `"@repo/utils": "workspace:*"`
- Usage example: `import { world } from "@repo/utils/hello"`

## Commands

```bash
pnpm i
pnpm dev
```
