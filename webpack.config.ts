import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src', 'index.ts'),

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      title: 'Title from webpack settings',
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ],
};

export default config
