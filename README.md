# Get Things Done | Task Tracker

This project is to be a single user app for tracking tasks.

## Available Commands

1. `npm run dev` - starts the development server with hot reloading enabled
2. `npm run build` - webpack builds the client app and babel compiles the server app to the 'build' folder, where it can be run in production mode
3. `npm run start` - starts the production server using the output from the build command
4. `npm run lint` - Run ESLint on the server and client code
## Project Structure

### Webpack Configuration

Webpack is used to package the server and client side applications. When `NODE_ENV = 'development'` the server app loads the webpack-hot-middleware into the Express server to provide a hot reload development experience.

TODO - Update the webpack configuration to remove the need for server side to load the webpack-dev-server.

### ESLint Configuration


### Client
The client side is written with React using the ES2015 syntax for JavaScript. Babel is used to transpile the client side to plain old JavaScript for backwards compatibility.

#### React
React is the view engine for the application. Redux is used to manage state on the client side. The [Ducks Design Pattern](https://github.com/erikras/ducks-modular-redux) is followed to help organize the redux action types, action creators, and reducers into modules (aka ducks).

### Server
The server side app uses Express web framework and Mongoose for accessing MongoDb.

## References
* [Some ides for modifying the AirBnB Style Guide](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.92ccwi5dp)
* [Why and How to bind methods in React components](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
* [Bootstrap CSS docs](http://getbootstrap.com/css/)
* [React component for tags input](https://github.com/olahol/react-tagsinput/blob/master/src/index.js)
* [React Univeral Hot Example](https://github.com/erikras/react-redux-universal-hot-example)

### Styles
* https://github.com/FormidableLabs/radium/
* https://github.com/postcss/postcss-loader
