# TELUS Standard

[![npm-image]][npm-url]
[![gha-image]][gha-url]

> Standard for TELUS Digital

`telus-standard` is inspired by `standard` but with TELUS specific linting and a11y rules.

For more information please see [standard.js](https://standardjs.com).

## Install

```bash
npm install @telus/telus-standard --save-dev
```

## Usage

You can manually run `telus-standard` from your project repo:

```bash
./node_modules/.bin/telus-standard
```

You can also add `telus-standard` to your **package.json** scripts:

```json
{
  "scripts": {
    "lint": "telus-standard --verbose",
    "lint:fix": "telus-standard --verbose --fix",
  }
}
```

## Migrating from `@telus/eslint-config`

1. Remove unnecessary packages
   ```sh
   npm rm @telus/eslint-config \
     eslint-config-airbnb \
     eslint-config-prettier \
     eslint-plugin-import \
     eslint-plugin-jest \
     eslint-plugin-jsx-a11y \
     eslint-plugin-react
   ```

2. Install `telus-standard`
   ```sh
   npm i --save-dev @telus/telus-standard
   ```

3. Update or add the these scripts in your **package.json**
   ```json
   {
     "scripts": {
       "lint": "telus-standard --verbose",
       "lint:fix": "telus-standard --verbose --fix",
     }
   }
   ```

4. Run the lint command
   ```sh
   npm run lint
   ```

### Removing `eslint-loader`

`telus-standard` does not work with `eslint-loader`. If you are unaware,
`eslint-loader` runs in your webpack pipeline so that eslint rules are forced to
run prior to the application working.

`eslint-loader` has been removed from
[telus-isomorphic-starter-kit](https://github.com/telus/telus-isomorphic-starter-kit),
you can
[read more about the decision from the Pull Request](https://github.com/telus/telus-isomorphic-starter-kit/pull/527#issuecomment-525001219).

1. Remove the package:
   ```sh
   npm rm eslint-loader
   ```
2. Remove references to the package in your project:
   ```diff
       rules: [
   -      {
   -        test: /\.(js|jsx)$/,
   -        enforce: 'pre',
   -        use: ['eslint-loader'],
   -        include: path.join(__dirname, 'src')
   -      },
          {
   ```

---
> Github: [@telus](https://github.com/telus) &bull; 
> Twitter: [@telusdigital](https://twitter.com/telusdigital)

[gha-image]: https://img.shields.io/github/workflow/status/telus/telus-standard/Build,%20Lint,%20Test%20and%20Deploy%20if%20master/master?logo=github&style=for-the-badge
[gha-url]: https://github.com/telus/telus-standard/actions?query=workflow%3A%22Build%2C+Lint%2C+Test+and+Deploy+if+master

[npm-url]: https://www.npmjs.com/package/@telus/telus-standard
[npm-image]: https://img.shields.io/npm/v/@telus/telus-standard.svg?style=for-the-badge&logo=npm
