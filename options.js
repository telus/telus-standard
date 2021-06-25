const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint,
  cmd: 'telus-standard',
  tagline: 'Use TELUS JavaScript Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, './eslintrc.js'),
    useEslintrc: true,
    cache: false
  }
}
