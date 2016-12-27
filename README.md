# Get Things Done | Task Tracker

This project is to be a single user app for tracking tasks.

## Available Commands

1. `npm run dev` - starts the development server with hot reloading enabled
2. `npm run build` - webpack builds the client app and babel compiles the server app to the 'build' folder, where it can be run in production mode
3. `npm run start` - starts the production server using the output from the build command
4. `npm run lint` - Run ESLint on the server and client code

## Todo List

In mostly no particular order:

* Update the webpack configuration to remove the need for server side to load the webpack-dev-server
* Add support for styling via sass, bootstrap, and sass-loader
* Add support for drag-n-drop of task cards
* Add [react-tagsinput](https://github.com/olahol/react-tagsinput) for tagging
* Add search feature to find tasks, projects, and tagged items (with [react-autosuggestion](https://github.com/moroshko/react-autosuggest))
* Reorganize the static resources on the client side (templates -> static, add stylesheets, etc.)
* Decide on a new name for the project

## Project Structure

### Webpack Configuration

Webpack is used to package the server and client side applications. When `NODE_ENV = 'development'` the server app loads the webpack-hot-middleware into the Express server to provide a hot reload development experience.

### ESLint Configuration
The configuration for eslint can be found in `.eslintrc`.

### Client
The client side is written with React using the ES2015 syntax for JavaScript. Babel is used to transpile the client side to plain old JavaScript for backwards compatibility.

#### React
React is the view engine for the application. Redux is used to manage state on the client side. The [Ducks Design Pattern](https://github.com/erikras/ducks-modular-redux) is followed to help organize the redux action types, action creators, and reducers into modules (aka ducks).

### Server
The server side app uses Express web framework and Mongoose for accessing MongoDb.

#### Express
[Express](http://expressjs.com/) is a web framework for nodejs.

#### Mongoose
[Mongoose](http://mongoosejs.com/) is a [mongodb](http://www.mongodb.org/) object modeling framework for nodejs.

## References
* [React Univeral Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
* [Why and How to bind methods in React components](http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/)
* [Bootstrap CSS docs](http://getbootstrap.com/css/)
* [Some ides for modifying the AirBnB Style Guide](https://medium.freecodecamp.com/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a#.92ccwi5dp)

### Styles
* https://github.com/FormidableLabs/radium/
* https://github.com/postcss/postcss-loader
