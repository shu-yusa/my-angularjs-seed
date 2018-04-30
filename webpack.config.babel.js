import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // settings read from enviroment variables
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(process.env.ENV),
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, use: [ 'url-loader' ] },
      { test: /\.json$/, use: [ 'json-loader' ] }
    ],
  }
};
