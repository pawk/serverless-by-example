const MongoClient = require('mongodb').MongoClient
const { DB_URL, DB_NAME } = process.env

const dbClient = new Promise((resolve, reject) => {
  MongoClient.connect(DB_URL, function(err, client) {
    if (err) {
      reject(err.message + ' ' + DB_URL)
    }
    resolve(client)
  });
})

module.exports.handler = function(event, context, callback) {
  function respond(code, message) {
    const body = JSON.stringify({ message })
    const response = { statusCode, body }
    callback(null, response)
  }

  let statusCode
  let message
  dbClient
    .then((client) => {
      const db = client.db(DB_NAME)
      // operate on your db ...
      client.close()
    })
    .then(() => respond(200, 'Connected successfully to database server'))
    .catch((err) => respond(500, err))
}
