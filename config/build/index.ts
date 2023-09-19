import {BuildOptions, buildConfigEnv} from '../../config/types'
import webpack from 'webpack'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildPlugins} from './buildPlugins'
import {buildDevServer} from './buildDevServer'

const PORT = 3000

export function buildWebpackConfig(
  params: BuildOptions,
  // eslint-disable-next-line no-unused-vars
): (env: buildConfigEnv) => webpack.Configuration {
  return (env) => {
    const isDev = env.mode === 'development'

    return {
      mode: env.mode,
      entry: params.paths.entry,
      ...{...(isDev && {devtool: 'inline-source-map'})},

      output: {
        filename: '[name].[contenthash].js',
        path: params.paths.build,
        clean: true,
      },

      module: buildLoaders({
        mode: env.mode,
        styleFolder: params.paths.styleFolder,
      }),
      resolve: buildResolvers(params.paths.srcFolder),
      plugins: buildPlugins({htmlPath: params.paths.htmlFile, isDev}),
      ...{
        ...(isDev && {devServer: buildDevServer({port: env.port ?? PORT})}),
      },
    }
  }
}
