
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssRenameWebpackPlugin = require('cssrename-webpack-plugin');
const webpack = require('webpack');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ProvidePluginConfig = new webpack.ProvidePlugin({
  _:              'underscore',
  Backbone:       'backbone'
});

var CssRenameWebpackPluginConfig = new CssRenameWebpackPlugin();

module.exports = {
  entry: {
    app: [
      './app/js/index.js'
    ]
  },

  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        test: /\.less$/,
        loader: "style-loader!css-loader!cssrename-loader!less-loader?config=lessLoaderCustom"
      }
    ]
  },

  plugins: [
    HTMLWebpackPluginConfig,
    ProvidePluginConfig,
    CssRenameWebpackPluginConfig
  ]
};