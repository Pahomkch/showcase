import { buildWebpackConfig } from './config/build';
import path from 'path'
import { BuildOptions } from './config/types';

const mode: BuildOptions['mode'] = process.env.NODE_ENV === 'development' ? "development" : 'production'

export default buildWebpackConfig({
  mode,
  paths: {
    entry: path.join(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    htmlFile: path.resolve(__dirname, 'public', 'index.html'),
  }
})
