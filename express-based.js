const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('*', function (req, res) {
  const { url, body, method, params, query, headers, files } = req;
  res.set('Content-type', 'application/json')
  res.send({
    message: 'reached endpoint ' + url,
    body,
    method,
    params,
    query,
    headers,
    files
  })
})

module.exports.handler = serverless(app)