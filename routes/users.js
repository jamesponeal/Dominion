'use strict'

const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient

// 'path' Node module that lets you reference files in the project structure without worrying about their relative location vs. the file you're using them in. Path goes to find them for you.
const path = require('path')

const databaseUrl = require(path.resolve('config/database')).usersDatabaseUrl


/* GET users listing. */
router.get('/', (req, res, next) => {

  res.render('users')

  // MongoClient.connect(databaseUrl, (err, db) => {
  //   const usersCollection = db.collection('User').find()
  //   res.render('users/', {
  //     title: 'users',
  //     users: usersCollection
  //   })
  // })
})

module.exports = router
