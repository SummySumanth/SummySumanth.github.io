const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: {
    main: path.resolve(__dirname, 'view/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: '5000',
    open: true,
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
      template: path.resolve(__dirname, 'view/temp.html')
    })
  ]
}