const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/components/App',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.css'],
    modules: ['node_modules'],
    alias: {
      components: path.resolve('./src/components'),
      features: path.resolve('./src/features'),
      utils: path.resolve('./src/utils'),
    },
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
  devtool: 'eval-source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin('index'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
