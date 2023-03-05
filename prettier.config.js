module.exports = {
  semi: true,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/react/tailwind.config.js',
};
