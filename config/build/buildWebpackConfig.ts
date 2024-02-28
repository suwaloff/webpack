import { buildDevServer } from './buildDevServer';
import { buildPlagins } from './buildPlagins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import webpack from 'webpack';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: 'bundle.[contenthash:8].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlagins(options),
    devtool: isDev && 'inline-source-map',
    devServer: buildDevServer(options),
  };
};
