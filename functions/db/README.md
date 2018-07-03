# Database connection

### Mongo DB

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
