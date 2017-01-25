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
      type: GraphQLStirng,
      args: {
        message: {type: GraphQLString}
      },
      resolve(rootVale, args) {
        return `received: ${args.message}`;
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});