import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(params: {port: number}): DevServerConfiguration {
  return {
    port: params.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
