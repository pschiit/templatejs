import { merge } from 'webpack-merge';
import common from './webpack.common.mjs';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
});