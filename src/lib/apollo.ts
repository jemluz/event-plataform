import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4t1zz472txk01wbfasv0zn6/master',
    cache: new InMemoryCache()
})