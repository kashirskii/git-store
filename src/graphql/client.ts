import { GraphQLClient } from "graphql-request";

import { getSdk } from "./__generate__";

const client = new GraphQLClient(`${process.env.GRAPHQL_URL}`, {
    headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`
    },
    next: {
        revalidate: 0
    }
})

export const gql = getSdk(client)
export * from './__generate__'