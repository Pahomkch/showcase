import {BuildPaths} from '../../config/types'
import {ResolveOptions} from 'webpack'

export function buildResolvers(
  srcFolderPath: BuildPaths['srcFolder'],
): ResolveOptions {
  return {
    alias: {
      src: srcFolderPath,
    },

    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [srcFolderPath, 'node_modules'],
  }
}
