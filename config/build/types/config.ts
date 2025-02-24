export type BuildModes = "production" | "development";

export interface BuildEnv {
  mode: BuildModes;
  port: number;
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildModes;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
