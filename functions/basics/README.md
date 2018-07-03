# Lambda Basics

Here you can find two examples of simple lambda implementation, both uses different conventions - one is based on AWS sdk, the other is based on Express sdk (using `serverless-http` wrapper to make it understandable for AWS).

Both will return data related to user's request.

### Run

```
sls offline start
# or
sls deploy
```

### AWS based 

```
curl localhost:3000/basics/aws-based
```

### Express based 

```
curl localhost:3000/basics/express-based
```

Using Express can be handy when porting existing node applications. In general hovewer I would consider it to be an overkill. This does not promotes granular separation of concerns and makes one function to hold multiple endpoints and responsibilities.

Also, you have to remember about the fact that your function is deployed together with `node_modules` directory, so less dependencies on your code the better. Express could be an unnecessary and heavy dependency.

Then there is a matter of urls. You have to either duplicate routes in lambda definitions and in Express code, or allow all requests to all urls to be consumed by single lambda function, thus delegating route resolve responsibility to function itself. There should be better separation of concerns by creating smaller functions with minimal dependencies and doing one thing only.

