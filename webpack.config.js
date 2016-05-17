var webpack = require('webpack');
var path = require('path');
var fs = require("fs");
var ejs = require('ejs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var webpack_isomorphic_tools_plugin =  new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration')).development()

module.exports = {
  context: __dirname,
  entry:[
    'webpack-hot-middleware/client',
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
  },
  module: {
    loaders:[
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
      { test: webpack_isomorphic_tools_plugin.regular_expression('images'), loader: 'url-loader?limit=10240&name=images/[name].[ext]' },
      { test: webpack_isomorphic_tools_plugin.regular_expression('fonts'), loader: 'url-loader?limit=65000&name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new WebpackCleanupPlugin(),
      webpack_isomorphic_tools_plugin,
      new ExtractTextPlugin("main.css"),
      function() {
         this.plugin("done", function(stats) {
          var source = path.join(__dirname, 'app', 'index.ejs');
          var template = fs.readFileSync(source, 'utf8');
          var htmlPath = path.join(__dirname, 'dist', 'index.ejs');
          var html = ejs.render(template, {html: "<%- html %>", reduxState: 'window.__INITIAL_STATE__ = <%- JSON.stringify(finalState) %>'});
          fs.writeFile(htmlPath, html);
        });
      }
    ],
};
