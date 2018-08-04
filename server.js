const config = require('./config')
const router = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

// Router
app.use('/', router)

app.use((request, response) => {
  response.status(404)
  response.send('NOT FOUND')
  console.log(`Reuested URL '${request.originalUrl}' NOT FOUND`)
})

const server = app.listen(config.server.port, () => {
  console.log(`Express server listening to port : ${server.address().port}`)
})

