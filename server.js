const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(3100, () => {
    console.log('info : Node server started at port 3100')
})