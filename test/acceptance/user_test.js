'use strict'

const path = require('path')
const http = require('http')
const app = require(path.resolve('app'))
const MongoClient = require('mongodb').MongoClient
const usersDatabaseUrl = require(path.resolve('config/database')).usersDatabaseUrl

describe('Users page', () => {
  beforeAll(() => {
    const server = http.createServer(app)
    server.listen(0)
    browser.baseUrl = 'http://localhost:' + server.address().port
    browser.ignoreSynchronization = true
  })


  describe('Given I visit /users', () => {
    beforeEach(() => {
      browser.get('/users')
    })
   
    it('Then I see a header and a list of users and (eventually) standings', () => {
      expect(element(by.tagName('h1')).getText()).toEqual('Player List')
      element.all(by.tagName('th')).then((titles) => {
        expect(titles.length).toBe(3)
        expect(titles[0].getText())toBe('Player Name')
        expect(titles[1].getText())toBe('Games Played')
        expect(titles[2].getText())toBe('Rank')
      })
    })
  })
})