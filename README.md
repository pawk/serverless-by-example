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

> To be able to deploy to cloud, you have to configure your AWS IAM role credentials as described here -> [https://serverless.com/framework/docs/providers/aws/guide/credentials/]()

Remember to issue all the commands from repository's root directory.

You can deploy all the functions defined in `serverless.yml` file by issuing 

```
sls deploy
```

Recommended way of bulked deploy is to run 

```
./deploy.sh
```
This will deploy all the functions with some predefined parameters (if required and applicable by this repo's functions)

Alternatively you can deploy single function

```
sls deploy --function <function-name>
```

This will not show you the endpoint though, as it will only update zipped code on the existing endpoint without rebuilding CloudFormation stack. This operation is much faster than CloudFormation-backed deploy.

Some additional paramters may be required by this repo's functions, please refer to corresponding `README.md` file.
