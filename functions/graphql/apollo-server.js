const { ApolloServer, gql } = require('apollo-server-lambda');

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    hello: String
    books: [Book]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => `
      Hello world!
      
      Available context: ${Reflect.ownKeys(context)}
      `,
    books: () => books
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

exports.handler = server.createHandler();
