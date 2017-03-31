'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RmRf = require('rimraf');

let addHash = (template, hash)=> {
  return NODE_ENV == 'production' ?
      template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
};

const plugins = [
    {
        apply: (compiler) => {
            RmRf.sync(compiler.options.output.path);
        }
    },
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js',
    }),
    new ExtractTextPlugin({
        filename: addHash('styles/[name].css', 'contenthash'),
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        title: 'WebpackReactRedux application',
        "files": {
            "css": [ "style.css" ],
            "js": [ "index.js"]
        },
        filename: 'index.html',
        template: 'app/index.html'
    })
];

if ( NODE_ENV != 'development' ) {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    );
};

module.exports = {

    entry:  {
        index: ['./app/index.js', './app/pages/dashboard.js'],
        style: './app/styles/style.scss',
        vendor: [
          'react',
          'react-dom'
        ]
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename:      addHash('[name].js', 'chunkhash'),
        chunkFilename: addHash('[id].js', 'chunkhash')
    },

    module: {
        noParse: /jquery/,
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    plugins: ['lodash'],
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: NODE_ENV == 'development'
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: NODE_ENV == 'development'
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                use: addHash('file-loader?name=[path][name].[ext]', 'hash:6')
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,

    plugins: plugins,

    devServer: {
        contentBase: __dirname + '/public',
        port: 8080
    }
};
