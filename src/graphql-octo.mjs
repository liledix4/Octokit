import { graphql } from "@octokit/graphql";

// 2do https://github.com/octokit/graphql.js/
// 2do https://docs.github.com/en/graphql

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token secret123`,
    },
});
const { repository } = await graphqlWithAuth(`
    {
        repository(owner: "octokit", name: "graphql.js") {
            issues(last: 3) {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    }
`);