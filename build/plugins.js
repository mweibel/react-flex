var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  new ExtractTextPlugin('index.css'),
]