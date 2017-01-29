'use strict'

const path = require('path')
const http = require('http')
const app = require(path.resolve('app'))

describe('Express CRUD', () => {
  beforeAll(() => {
    const server = http.createServer(app)
    server.listen(0)
    browser.baseUrl = 'http://localhost:' + server.address().port
    browser.ignoreSynchronization = true
  })

  describe('Given I visit /users', () => {
    it('Then I see the express default', () => {
      browser.get('/users')
      expect(element(by.tagName('body')).getText()).toEqual('respond with a resource')
    })
  })
})