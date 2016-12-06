/**
 * Module dependencies.
 */
import path from 'path';
import compression from 'compression';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';

const debug = process.env.NODE_ENV !== 'production';
/**
 * Create Express server.
 */
const app = express();
app.set('port', process.env.PORT || 3000);
//app.use(compression());

/**
 * Route handlers
 */
const taskRoutes = require('./routes/Task.routes');

/**
 * API routes
 */
app.use('/api/tasks', taskRoutes.default);

// Enable webpack middleware if in debug mode
if (debug) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
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

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
