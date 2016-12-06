/**
 * Module dependencies.
 */
const path = require('path');
const compression = require('compression');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

const debug = process.env.NODE_ENV !== 'production';

/**
 * Create Express server.
 */
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
//app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Route handlers
 */
const taskRoutes = require('./routes/Task.routes');

/**
 * API routes
 */
app.use('/api/tasks', taskRoutes);

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
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
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
