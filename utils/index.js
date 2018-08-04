const logger = require('./logger')

const setResponse = (response, options) => {
  switch (options.status) {
    case 400:
      logger.info(options.detail)
      options.message = RESPONSE_MSG.BAD_REQUEST
      break
    case 401:
      logger.info(options.detail)
      options.message = RESPONSE_MSG.UNAUTHORISED
      break
    case 403:
      logger.info(options.detail)
      options.message = RESPONSE_MSG.FORBIDDEN
      break
    case 404:
      logger.info(options.detail)
      options.message = RESPONSE_MSG.NOT_FOUND
      break
    case 500:
      logger.info(options.detail)
      options.message = RESPONSE_MSG.NOT_GOOD
      break
    default:
      logger.info()
  }

  response.status(options.status || 200)
  response.json({
    data: options.data || {},
    meta: {
      message: options.message,
      detail: options.detail
    }
  })
}

module.exports = {
  setResponse
}