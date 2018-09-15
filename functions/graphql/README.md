# Apollo Server on Lambda

> Example based on great official documentation you an find on [https://www.apollographql.com](https://www.apollographql.com)

## Run

```
sls offline start
```

Then go to `http://localhost:3000/graphql`, you should see Graphql playground.

## Query data

Try querying data with

```
{
  hello
  books {
    title
    author
  }
}
```

Play with it for a while.

## Deploy

To deploy single function 

```
sls deploy --function db-mongo
```

To deploy all functions 

```
sls deploy
```
