const typeDefs = `  
  type Query {
    me: User
  }
  
  input BookInput {
    authors: [String]!
    description: String!
    title: String!
    bookId: ID!
    image: String
    link: String
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput): User
    removeBook(bookId: ID!): User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]!
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
