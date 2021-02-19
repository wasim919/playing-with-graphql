const { buildSchema } = require("graphql")

const schema = buildSchema(`
	type Course {
		id: Int
		title: String
		author: String
		description: String
		topic: String
		url: String
	}
	type Mutation {
		updateCourseTopic(id: Int!, topic: String!): Course
	}
	type Query {
		course(id: Int!): Course
		courses(topic: String!): [Course]
	}
`)

module.exports = { schema }
