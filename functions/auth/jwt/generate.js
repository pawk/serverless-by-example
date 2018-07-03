const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports.handler = function(event, context, callback) {
  const token = jwt.sign({ foo: 'bar' }, secret, { expiresIn: '1h' });  
  const statusCode = 200;
  const body = JSON.stringify({ token });
  const response = { statusCode, body };
  
  callback(null, response);  
}
