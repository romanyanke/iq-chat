module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': ['warn', { allowKeywords: true }],
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'generator-star-spacing': ['warn'],
    'no-await-in-loop': ['warn'],
    'jsx-quotes': ['error', 'prefer-double'],
    'babel/new-cap': ['warn'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/react-in-jsx-scope': ['error'],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    indent: ['off'],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
  },
  env: {
    jest: true,
  },
  plugins: ['babel', 'react'],
}
