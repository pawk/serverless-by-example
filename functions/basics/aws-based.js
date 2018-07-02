module.exports.handler = function(event, context, callback) {
  const statusCode = 200;
  const body = JSON.stringify({
    message: 'reached endpoint ' + event.path,
    event,
    context
  });
  const response = {
    statusCode,
    body,
    headers: {
      "x-custom-header" : "my custom header value"
    }
  };
  console.log("response: " + JSON.stringify(response))
  callback(null, response);  
}
