const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './app/view/index.jsx',
  output: {
    filename: 'assets/js/bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    port: 5001,
    open: true,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024,
          },
        },
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-import'),
                  // Add other PostCSS plugins if needed
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                '@babel/preset-react',
              ],
              configFile: path.resolve(__dirname, 'babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader',
        ],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'hello world',
      template: 'app/view/index.hbs',
      description: 'Some Description',
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
