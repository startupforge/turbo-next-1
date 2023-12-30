/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 80,
  bracketSameLine: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^(.*).css$", // css imports
    "^(.*)$", // everything else
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
