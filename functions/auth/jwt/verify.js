const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports.handler = function(event, context, callback) {
  const token = event.headers.Authorization && event.headers.Authorization.split(' ').pop()
  let payload, message, statusCode

  try {
    payload = jwt.verify(token, secret)
    message = 'Token successfully verified'
    statusCode = 200
  } catch (e) {
    payload = false
    message = e.message
    statusCode = 401
  }

  const body = JSON.stringify({ token, payload, message })
  const response = { statusCode, body }
  
  callback(null, response)
}
