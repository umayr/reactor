/**
 * Created by Umayr Shahid on 11/23/15.
 */

'use strict';
var path = require('path');

module.exports = {
    entry: {
        src: [
            'webpack/hot/dev-server',
            './src/index.jsx'
        ]
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};