const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'telus-standard',
  eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  homepage: pkg.homepage,
  tagline: 'Use TELUS JavaScript Standard Style',
  version: pkg.version
}
