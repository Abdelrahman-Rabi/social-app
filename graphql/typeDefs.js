const { gql } = require("apollo-server");

module.exports = gql`
  type post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Query {
    getPosts: [post]
  }
`;
