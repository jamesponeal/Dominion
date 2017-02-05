'use strict'

const MongoClient = require('mongodb').MongoClient

const usersDatabaseUrl = 'mongodb://localhost/users_' + (process.env.NODE_ENV || 'development')

// I made this one just to make sure we could successfully export an object and access the right URL in the route file
const gamesDatabaseUrl = 'mongodb://localhost/games_' + (process.env.NODE_ENV || 'development')


module.exports = { usersDatabaseUrl, gamesDatabaseUrl }