import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...coreWebVitals,
  {
    rules: {
      // Site copy is first-person prose; literal apostrophes in JSX are fine.
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
];

export default eslintConfig;
