# Serverless by example

### Dependencies 

You will need to install some dependencies 

```
npm install -g serverless
npm install
```

### Execution

To run/deploy examples, you have to go to particular directory and issue command from there. See appropriate README files.
In general, you do it with two commands (possibly with some additional parameters).

#### Offline - local serverless emulation

```
sls offline start 
```

#### Deploy to platform

This command will deploy all functions defined in `serverless.yml`

```
sls deploy
```
To deploy single function one can go with 

```
sls eploy --function <function-name>
```
This command is much faster as it does not update CloudFormation stack. This will not update lambda url.

## Examples 

- [Basics](functions/basics/)
- [JSON Web Token](functions/auth/jwt/)
- [MongoDB connection](functions/db/)