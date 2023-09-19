import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import webpack from 'webpack'
import {BuildPaths} from '../../config/types'

export function buildPlugins(params: {
  htmlPath: BuildPaths['htmlFile']
  isDev: boolean
}): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      title: 'Title from webpack settings',
      template: params.htmlPath,
    }),

    new MiniCssExtractPlugin(),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(params.isDev),
    }),

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]
}
