const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: 'index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] }, modules: false }],
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
          ]
        },
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
