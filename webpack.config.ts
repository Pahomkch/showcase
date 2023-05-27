import { buildWebpackConfig } from './config/build';
import path from 'path'

export default buildWebpackConfig({
  paths: {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    htmlFile: path.resolve(__dirname, 'public', 'index.html'),
    srcFolder: path.resolve(__dirname, 'src')
  }
})
