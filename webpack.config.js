const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolutions = require('./view/styles/resolutions');

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
    port: '4000',
    open: true,
    historyApiFallback: true,
    hot: true,
    watchFiles: {
      paths: [path.resolve(__dirname, 'dist')],
    }
  },
  // loaders
  module: {
    rules: [
      {
        // css
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
          {
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-custom-media",
									],
								],
							},
						},
					},
        ]
      },
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
        }
      }
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'summy.dev',
      filename: 'index.html',
      base: '/',
      template: path.resolve(__dirname, 'view/temp.html'),
      inject: 'body',
    }),
  ]
}