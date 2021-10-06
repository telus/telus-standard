const eslint = require('eslint')
const pkg = require('./package.json')
const baseConfig = require('./eslintrc')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint,
  cmd: 'telus-standard',
  tagline: 'Use TELUS JavaScript Standard Style',
  eslintConfig: {
    baseConfig,
    useEslintrc: true,
    cache: false
  }
}
