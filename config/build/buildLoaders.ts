import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

  const cssLoaderWithModules: webpack.RuleSetUseItem = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
        namedExport: false,
      },
      sourceMap: isDev,
    },
  };

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      styleLoader,
      cssLoaderWithModules,
      {
        loader: "sass-loader",
        options: { sourceMap: isDev },
      },
    ],
  };

  const cssLoader: webpack.RuleSetRule = {
    test: /\.css$/,
    use: [
      styleLoader,
      {
        loader: "css-loader",
        options: { sourceMap: isDev },
      },
    ],
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    type: "asset/resource",
  };

  return [tsLoader, scssLoader, cssLoader, fileLoader];
}
