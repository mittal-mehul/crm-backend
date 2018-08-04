const config = require('../config')
const mysql = require('mysql')
const { promisify } = require('util')

const pool = mysql.createPool(config.database)

pool.query = promisify(pool.query)

module.exports = pool