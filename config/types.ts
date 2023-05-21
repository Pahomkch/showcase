export interface BuildPaths {
  htmlFile: string
  entry: string
  build: string
}

export interface BuildOptions {
  mode: 'production' | 'development'
  paths: BuildPaths
}
