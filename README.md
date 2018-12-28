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
$ cd server
$ npm start
```

You should have your development server running on port _4000_, and the client running on port _3000_.

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.