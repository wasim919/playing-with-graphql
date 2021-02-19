const express = require("express")
const { graphqlHTTP } = require("express-graphql")

const { root } = require("./graphql/resolvers")
const { schema } = require("./graphql/schema")

const PORT = process.env.PORT || 3000

const app = express()

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
)

app.listen(PORT, () => console.log(`Express GraphQL server now running on localhost:${PORT}`))
