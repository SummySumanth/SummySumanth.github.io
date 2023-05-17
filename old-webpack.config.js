const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development', // production
  entry: {
    main: path.resolve(__dirname, 'view/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: '3001',
    open: true,
    historyApiFallback: true,
    hot: true,
    watchFiles: {
      paths: [path.resolve(__dirname, 'dist')],
    }
  },  
  // Optimiztion and performance
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all'
    }
  },
  // loaders
  module: {
    rules: [
      {
        // images
        test: /\.(svg|ico|png|webp|gif|jpeg|jpg)$/,
        type: 'asset/resource'
      },
      {
        // js for babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        },
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }
    ]
  },
  // plugins
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   include: /\.min\.js$/,
    //   minimize: true
    // }),
    new HtmlWebpackPlugin({
      title: 'summy.dev',
      filename: 'index.html',
      base: '/',
      template: path.resolve(__dirname, 'view/temp.html'),
      inject: 'head',
    }),
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}