const eslint = require('eslint')
const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'telus-standard',
  eslint,
  eslintConfig: {
    baseConfig: require('./eslintrc'),
    useEslintrc: true
  },
  homepage: pkg.homepage,
  tagline: 'Use TELUS JavaScript Standard Style',
  version: pkg.version
}
