module.exports = {
  extends: [
    'airbnb',
    'prettier'
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },

  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'jest'
  ],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  env: {
    jest: true,
    browser: true
  },

  rules: {
    // eslint
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'global-require': 'off',
    'no-alert': 'error',
    'no-console': 'error',
    'no-underscore-dangle': 'off',
    'padded-blocks': 'error',
    'semi': [
      'error',
      'never'
    ],
    'quotes': [
      'error',
      'single'
    ],


    // import plugin
    'import/default': 'error',
    'import/named': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/jestenv.js', // jestenv
        '**/postcss.config.js', // postcss
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/webpack.*.config.js' // TELUS webpack config
      ],
      optionalDependencies: false
    }],

    // react plugin
    'react/display-name': 'error',
    'react/forbid-prop-types': [
      1,
      {
        'forbid': [
          'any'
        ]
      }
    ],
    'react/jsx-boolean-value': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-uses-react': [
      'warn'
    ],
    'react/no-danger': 'off',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-multi-comp': 'warn',
    'react/no-unknown-property': 'warn',
    'react/sort-comp': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-fragments': 'warn',

    // jsx-a11y plugin
    'jsx-a11y/no-static-element-interaction': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        'aspects': [
          'invalidHref'
        ]
      }
    ]

  }
}
