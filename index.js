require('babel-core/register');
require('babel-polyfill');

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
var projectBasePath = require('path').resolve(__dirname);

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack-isomorphic-tools-configuration'))
.development(process.env.NODE_ENV === 'development')
.server(projectBasePath, function(){
  require('./server/app');  
});

require('./server/app');
