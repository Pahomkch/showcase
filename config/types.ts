export interface BuildPaths {
  htmlFile: string
  entry: string
  build: string
  srcFolder: string
  styleFolder: string
}

export interface BuildOptions {
  paths: BuildPaths
}

export interface buildConfigEnv {
  port?: number
  mode: 'production' | 'development'
}
