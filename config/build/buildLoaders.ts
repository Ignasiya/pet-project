import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const [scssLoader, cssLoader] = buildCssLoaders(isDev)

  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  }

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [babelLoader, tsLoader, scssLoader, cssLoader, fileLoader, svgLoader]
}
