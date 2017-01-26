import {
  //basic GraphQL types:
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,

  GrapgQLNonNull,
  GraphQLSchema,
  graphql
} from 'graphql';

const Query = new GraphQLObjectType({
  name: 'RootQueries',
  fields: () => ({
    echo: {
      type: GraphQLString,
      args: {
        message: {type: GraphQLString}
      },
      resolve(rootValue, args) {
        return `received: ${args.message}`;
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

let query = `
  query getEcho($inputMessage: String) {
    receivedMessage: echo(message: $inputMessage)
  }
`;

graphql(Schema, query, null, null, {inputMessage: "Hello"}).then(function(result) {
  console.log(result);
});

// babel-node index.js --presets "es2015"
// in the command line to run this query