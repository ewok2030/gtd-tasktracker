# Get Things Done | Task Tracker

This project is to be a single user app for tracking tasks.

## Available Commands

1. `npm run dev` - starts the development server with hot reloading enabled
2. `npm run build` - webpack builds the client app and babel compiles the server app to the 'build' folder, where it can be run in production mode
3. `npm run start` - starts the production server using the output from the build command

## MERN

## Project Structure

### Webpack Configuration

Webpack is used to package the server and client side applications. When `NODE_ENV = 'development'` the server app loads the webpack-hot-middleware into the Express server to provide a hot reload development experience.

### Client
The client side is written with React using the ES2015 syntax for JavaScript. Babel is used to transpile the client side to plain old JavaScript for backwards compatibility.

### Server
The server side app uses Express  web framework and Mongoose for accessing MongoDb.
