/**
 * Module dependencies.
 */
import path from 'path';
import compression from 'compression';
import express from 'express';
import webpack from 'webpack';
import mongoose from 'mongoose';
// webpack
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

import serverConfig from './config.js';
const isDevelopment = process.env.NODE_ENV === 'development';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
import taskSeed from './data/Task.seed';
import projectSeed from './data/Project.seed';

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!');
        throw error;
    }

    // feed some dummy data in DB
    if (serverConfig.seedDatabase) {
        taskSeed();
        projectSeed();
    }
});

/**
 * Create Express server.
 */
const app = express();
app.set('port', serverConfig.port);
app.use(compression());

/**
 * Route handlers
 */
const taskRoutes = require('./routes/Task.routes');
const projectRoutes = require('./routes/Project.routes');

/**
 * API routes
 */
app.use('/api/tasks', taskRoutes.default);
app.use('/api/projects', projectRoutes.default);

/**
 * Start Express server.
 */
// Enable webpack middleware if in debug mode
if (isDevelopment) {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/public'));
    app.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

app.listen(serverConfig.port, () => {
    console.log('App is running at http://localhost:%d in %s mode', serverConfig.port, app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

export default app;
