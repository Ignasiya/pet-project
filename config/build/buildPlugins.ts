import {
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
  type WebpackPluginInstance
} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({
  paths,
  isDev
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new ReactRefreshWebpackPlugin()
  ]

  if (isDev) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    )
  }

  return plugins
}
