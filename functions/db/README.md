# Database connection

### Mongo DB

> Issue commands from repository's root directory

One must provide `DB_URL` env var in form of 

```
export DB_URL=mongodb://<username>:<password>@<host>:<port>/<db-name>
```

Then run script with 

```
sls offline start
# or 
sls deploy
```

To deploy single function 

```
sls deploy --function db-mongo
```
