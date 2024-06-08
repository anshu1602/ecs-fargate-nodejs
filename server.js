// const express = require("express");
// const app = express();
// const PORT = 5000;
// const userData = require("./MOCK_DATA.json");
// const graphql = require("graphql")
// const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } = graphql
// const { graphqlHTTP } = require("express-graphql")

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//         id: { type: GraphQLInt },
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//     })
// })

// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         getAllUsers: {
//             type: new GraphQLList(UserType),
//             args: { id: {type: GraphQLInt}},
//             resolve(parent, args) {
//                 return userData;
//             }
//         },
//         findUserById: {
//             type: UserType,
//             description: "fetch single user",
//             args: { id: {type: GraphQLInt}},
//             resolve(parent, args) {
//                 return userData.find((a) => a.id == args.id);
//             }
//         }
//     }
// })
// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         createUser: {
//             type: UserType,
//             args: {
//                 firstName: {type: GraphQLString},
//                 lastName: { type: GraphQLString },
//                 email: { type: GraphQLString },
//                 password: { type: GraphQLString },
//             },
//             resolve(parent, args) {
//                 userData.push({
//                     id: userData.length + 1,
//                     firstName: args.firstName,
//                     lastName: args.lastName,
//                     email: args.email,
//                     password: args.password
//                 })
//                 return args
//             }
//         }
//     }
// })

// const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation})
// app.use("/graphql", graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// app.get("/rest/getAllUsers", (req, res) => {
//     res.send(userData)
//    });

// app.listen(PORT, () => {
//   console.log("Server running");
// });


const http = require('http');
const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call a fish with no eyes? Fsh!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.end(`
      <html>
        <body>
          <h1>Random Joke Generator</h1>
          <p>${randomJoke}</p>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});