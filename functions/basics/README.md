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