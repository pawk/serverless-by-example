# JSON Web Token 

### Deploy

> Issue commands from repository's root directory

To make this work one has to deploy functions with `--jwt-secret` cli parameter, like

```
sls offline --jwt-secret abcd start
# or 
sls --jwt-secret abcd deploy
```

To deploy only jwt-related functions

```
sls deploy --jwt-secret abcd --function auth-jwt-generate
sls deploy --jwt-secret abcd --function auth-jwt-verify
```

Two endpoints available - for token generation (`/auth/jwt/generate`) and verification (`/auth/jwt/verify`).

### Generate 
 
Sent `POST` request to proper endpoint

```
curl -X POST localhost:3000/auth/jwt/generate
```

### Verify

Token has to be sent as `Authorization` header of Bearer type. One can test it locally with 

```
curl -X GET -H "Authorization: Bearer <token>" localhost:3000/auth/jwt/verify
```