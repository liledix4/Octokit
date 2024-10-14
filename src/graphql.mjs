import { buildSchema, graphql } from "graphql";

export async function doGraphQL({schema, source, rootValue}) {
    schema = buildSchema(schema);
    return await graphql({
        schema,
        source,
        rootValue
    }).then(response => {
        return response;
    });
}