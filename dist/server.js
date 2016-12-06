'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = process.env.NODE_ENV !== 'production';
/**
 * Create Express server.
 */
/**
 * Module dependencies.
 */
var app = (0, _express2.default)();
app.set('port', process.env.PORT || 3000);
//app.use(compression());

/**
 * Route handlers
 */
var taskRoutes = require('./routes/Task.routes');

/**
 * API routes
 */
app.use('/api/tasks', taskRoutes.default);

// Enable webpack middleware if in debug mode
if (debug) {
    (function () {
        var compiler = (0, _webpack2.default)(_webpackConfig2.default);
        var middleware = (0, _webpackDevMiddleware2.default)(compiler, {
            publicPath: _webpackConfig2.default.output.publicPath,
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
        app.use((0, _webpackHotMiddleware2.default)(compiler));
        app.get('/', function response(req, res) {
            res.write(middleware.fileSystem.readFileSync(_path2.default.join(__dirname, 'dist/index.html')));
            res.end();
        });
    })();
} else {
    app.use(_express2.default.static(__dirname + '/dist'));
    app.get('/', function response(req, res) {
        res.sendFile(_path2.default.join(__dirname, 'dist/index.html'));
    });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), function () {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;