import { RuleSetRule, RuleSetUseItem } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoaders(isDev: boolean): RuleSetRule[] {
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

  const cssLoaderWithModules: RuleSetUseItem = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        namedExport: false
      },
      sourceMap: isDev
    }
  }

  const scssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      styleLoader,
      cssLoaderWithModules,
      {
        loader: 'sass-loader',
        options: { sourceMap: isDev }
      }
    ]
  }

  const cssLoader: RuleSetRule = {
    test: /\.css$/,
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: { sourceMap: isDev }
      }
    ]
  }

  return [scssLoader, cssLoader]
}
