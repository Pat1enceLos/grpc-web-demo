const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    compress: true,
    static: {
      directory: path.join(__dirname, '../dist'),
      watch: {
        poll: 1000,
      },
    },
    allowedHosts: 'all',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'grpc',
      description: 'grpc',
      templateParameters: {
        'injectStyle': false
      },
      template: './index.html',
      minify: false,
      inject: true,
    })
  ]
}