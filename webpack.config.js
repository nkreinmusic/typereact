var webpack = require('webpack');
var path = require('path');
require('es6-promise').polyfill();

// var PROD = JSON.parse(process.env.PROD_DEV || "0");
var PROD = true;

module.exports = {  
    entry: [
      // for es6
      'babel-polyfill', 
      "./shared/index.js",
      // 'webpack/hot/only-dev-server',
      // 'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: __dirname,
        // publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
          {
            test: /\.jsx?$/, 
            loader: 'eslint-loader', 
            exclude: /node_modules/
          }
        ],
        loaders: [
            { 
                test: /\.jsx?$/, 
                // include: path.join(__dirname, 'src'),
                loader: 'babel-loader', 
                query: {
                    plugins: ['transform-runtime', 'transform-es2015-modules-commonjs'], 
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',

            // },
                // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: PROD ? [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            // for developers: keeps track of the current line/column in the output 
            // and can trivially generate a source mapping to the original code
            // requires firefox/chrome 
            sourceMap: false,
            // reduce names of local variables to (usually) single-letters
            mangle: true,
            // suppress warning while compressing
            compress: {
                warnings: false
            },
            minimize: true
        }),
        // Setting DefinePlugin affects React library size!
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')

        // You can set this to JSON.stringify('development') for your
        // development target to force NODE_ENV to development mode
        // no matter what
        })
    ] : [
        new webpack.NoErrorsPlugin()
    ]


};

