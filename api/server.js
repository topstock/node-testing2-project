const express = require('express')

const { logger } = require('./middleware/middleware')

const server = express()

server.use(express.json(), logger)

const router = require('./schools/schools-router')
server.use('/api/schools', router)

server.get('/', (req, res) => {
  res.send('<h2Welcome to the Unique Major Subjects API</h2>')
})

server.use(function (req, res) {
  res.status(404).json({ message: 'The subject requested does not exist' })
})

server.use(function (err, res) {
  res.status(400).send(err.message)
})

module.exports = server
