import {buildWebpackConfig} from './config/build'
import path from 'path'
import 'dotenv/config'

export default buildWebpackConfig({
  paths: {
    entry: path.join(__dirname, 'src', 'app', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    htmlFile: path.resolve(__dirname, 'public', 'index.html'),
    srcFolder: path.resolve(__dirname, 'src'),
    styleFolder: path.resolve(__dirname, 'src', 'app', 'styles'),
  },
})
