#!/usr/bin/env node
const opts = require('../options')

if (process.version.match(/v(\d+)\./)[1] < 6) {
  // eslint-disable-next-line no-console
  console.error('standard: Node 6 or greater is required. `standard` did not run.')
} else {
  require('standard-engine').cli(opts)
}
