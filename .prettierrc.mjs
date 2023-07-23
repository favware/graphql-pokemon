import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
  ...sapphirePrettierConfig,
  useTabs: false,
  tabWidth: 2,
  overrides: [
    ...sapphirePrettierConfig.overrides,
    {
      files: 'src/assets/*.ts,json',
      options: {
        printWidth: 200
      }
    },
    {
      files: ['README.md', 'docs/pages/**/*.md'],
      options: {
        tabWidth: 2,
        useTabs: false,
        printWidth: 80,
        proseWrap: 'always'
      }
    }
  ]
};
