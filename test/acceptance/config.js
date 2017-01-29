/* globals browser */
'use strict'

module.exports.config = {
  specs: ['./**/*_test.js'],
  framework: 'jasmine',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    enableTimeouts: false
  },
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  onPrepare: () => {
    const path = require('path')
    const http = require('http')
    const app = require(path.resolve('app'))
    const server = http.createServer(app)
    server.listen(0)
    browser.baseUrl = 'http://localhost:' + server.address().port
    browser.ignoreSynchronization = true
  }
}