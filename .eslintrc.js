module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@company/eslint-config-custom`
  extends: ["@company/custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
