import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8smlf1be201z2glr253x2/master',
    cache: new InMemoryCache()
})