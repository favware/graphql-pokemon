const sapphirePrettierConfig = require('@sapphire/prettier-config');

module.exports = {
  ...sapphirePrettierConfig,
  useTabs: false,
  tabWidth: 2,
  overrides: [
    ...sapphirePrettierConfig.overrides,
    {
      files: ['README.md'],
      options: {
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        proseWrap: 'always'
      }
    }
  ]
};
