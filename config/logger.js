const winston = require('winston')
const logDir = '/var/log/crm-backend'
module.exports = {
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new (winston.transports.Console)({
      handleExceptions: true
    }),
    new (winston.transports.File)({
      level: 'error',
      filename: `${logDir}/error.log`,
      format: winston.format.uncolorize(),
      handleExceptions: true
    }),
    new (winston.transports.File)({
      level: 'info',
      filename: `${logDir}/info.log`,
      format: winston.format.uncolorize(),
      handleExceptions: true
    })
  ]
}