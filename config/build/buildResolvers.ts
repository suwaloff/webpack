import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': options.paths.src,
    },
  };
}
