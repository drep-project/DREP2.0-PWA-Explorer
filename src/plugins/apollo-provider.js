import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    // uri: 'https://countries.trevorblades.com/'
    // uri: 'https://api.graphql.jobs/'  // just for testing purposes
    uri: 'https://fantom.rocks/fapi'
});

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $query: {
            fetchPolicy: 'network-only'  // 'cache-and-network', 'network-only', 'cache-first'
        }
    }
});


