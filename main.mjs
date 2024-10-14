import { doGraphQL } from "./src/graphql.mjs";


const graphQLQuery = {
    schema: `
        type Query {
            hello: String
        }
    `,
    source: "{ hello }",
    rootValue: {
        hello() {
            return "Hello world!"
        }
    }
};


console.log(
    await doGraphQL(graphQLQuery)
);