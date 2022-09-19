const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const config = require('./webpack.config.base');

const envKeys = Object.keys(process.env).filter(key => !key.startsWith('npm'));
const envVars = {};
envKeys.forEach((envKey) => {
  envVars[envKey] = JSON.stringify(process.env[envKey]);
});

module.exports = merge(config, {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', path.join(__dirname, '../src/client.jsx')],
  },
  devServer: {
    contentBase: path.join(__dirname, '../src/public'),
    historyApiFallback: true,
    disableHostCheck: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': envVars, 'process.env.NODE_ENV2': 'development' }),
  ],
});
