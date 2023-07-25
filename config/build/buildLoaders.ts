import {BuildPaths, buildConfigEnv} from '../../config/types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {ModuleOptions} from 'webpack'

export function buildLoaders(params: {
  mode: buildConfigEnv['mode']
  styleFolder: BuildPaths['styleFolder']
}): ModuleOptions {
  const isDev = params.mode === 'development'

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const typescriptLoader = {
    test: /\.ts.$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (filePath: string) => Boolean(filePath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },

      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [params.styleFolder],
          },
        },
      },
    ],
  }

  return {
    rules: [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader],
  }
}
