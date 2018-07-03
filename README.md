# Serverless by example

## Examples 

- [Basics](functions/basics/)
- [JSON Web Token](functions/auth/jwt/)
- [MongoDB connection](functions/db/)

## Execution 

### Dependencies 

You will need to install some dependencies 

```
npm install -g serverless
npm install
```

### Run locally

```
sls offline start 
```

### Deploy to cloud

To run/deploy examples, you have to issue all the commands from repository's root directory.

You can deploy all the functions defined in `serverless.yml` file by issuing 

```
sls deploy
```

Recommended way of bulked deploy is to run 

```
./deploy.sh
```
This will deploy all the functions with some predefined parameters (if required and applicable)

Alternatively you can deploy single function (without rebuilding CloudFormation stack, so this operation is much faster)

```
sls deploy --function <function-name>
```

This will not show you the endpoint though, as it will only update zipped code on the existing endpoint.
Some additional paramters may be required.
