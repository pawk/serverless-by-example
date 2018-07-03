const MongoClient = require('mongodb').MongoClient
const { DB_URL, DB_NAME } = process.env

const dbClient = new Promise((resolve, reject) => {
  MongoClient.connect(DB_URL, function(err, db) {
    if (err) {
      reject(err.message)
    }
    resolve(db)
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
    .then((db) => {
      // operate on your db ...
      db.close()
    })
    .then(() => respond(200, 'Connected successfully to database server'))
    .catch((err) => respond(500, err))
}
