import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactSwUpdateTips'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@feizheng/next-offline-sw': '@feizheng/next-offline-sw'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
