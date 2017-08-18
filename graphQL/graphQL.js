const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');

const data = require('./user.json');

const userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLString },
  },
});

const schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: graphql.GraphQLString },
        },
        resolve(_, args) {
          return data[args.id];
        },
      },
    },
  }),
});

express().use('/graphql', graphqlHTTP({ schema, pretty: true })).listen(3000);

console.log('GraphQL server running on http://localhost:3000/graphql');
