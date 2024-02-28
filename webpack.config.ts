import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/build/types/config';
import webpack from 'webpack';
import path from 'path';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };
  const config: webpack.Configuration = buildWebpackConfig({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    paths,
  });

  return config;
};
