const config = require('./config')
const router = require('./routes')
const logger = require('./utils/logger')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { setResponse } = require('./utils')

app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

// Router
app.use('/', router)

app.use((request, response) => {
  setResponse(response, {
    status: 404,
    detail: `Requestd URL : ${request.originalUrl}`
  })
})

const server = app.listen(config.server.port, () => {
  logger.info(`Express server listening to port : ${server.address().port}`)
})

