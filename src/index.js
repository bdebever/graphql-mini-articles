import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';

const httpLink = createHttpLink({
    uri: 'https://server-graphql-articles.herokuapp.com/'
})

console.log(process.env.SERVER_GRAPHQL);
console.log(process.env.NODE_ENV);

/**
 * Create the Apollo Client Instance
 */
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client = {client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
