This project has the following setup:

_Frontend_:
- React: Frontend framework for building user interfaces
- Apollo Client: Production-ready, caching GraphQL client

_Backend_:
- graphql-yoga: Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience
- Prisma: Open-source GraphQL API layer that turns the database into a GraphQL API

The design is handled with the [Ant.design](https://ant.design) framework.

More details:
- [https://www.howtographql.com/react-apollo/0-introduction/](https://www.howtographql.com/react-apollo/0-introduction/)
- [https://github.com/prisma/prisma-examples/tree/master/node/graphql](https://github.com/prisma/prisma-examples/tree/master/node/graphql)

## Architecture

We have the following directories:
- `src`: contains the client files of the React application
- `server`: contains the GraphQL server as well as the Prisma configuration. This is [another repository](https://github.com/bdebever/graphql-mini-articles-server). The address of the server is defined in the `./src/index.js` file, line 12.
- `public`: static files for the React application to work


## Installation

In order to set up the environment, you need to do the following:
```
$ git clone --recurse-submodules git@github.com:bdebever/graphql-mini-articles.git
```
The flag `--recurse-submodules` is important in order to clone the server repository as well.
Then, `cd` into this new repository, and run the following:
```
$ npm install
$ npm start
```

You should have your development server running on port _4000_, and the client running on port _3000_, you can navigate to localhost:3000 and start playing!.