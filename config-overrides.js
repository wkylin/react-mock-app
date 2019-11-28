const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
const {
  override,
  fixBabelImports,
  addLessLoader,
  disableEsLint,
  addWebpackAlias,
  babelInclude,
} = require('customize-cra');
const webpackConfig = require('./webpack.config');

const addWebpackModules = () => (config, env) => {
  config.optimization.minimizer.push(...webpackConfig.optimization.minimizer);
  // console.log('env==>>', env);
  // console.log('config==>>', config);
  return config;
};
module.exports = override(
  disableEsLint(),
  addWebpackModules(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#55c0ff',
      '@success-color': '#55c0ff',
    },
  }),
  babelInclude([
    path.resolve('src'),
  ]),
  addWebpackAlias({
    // '@': resolve('src'),
    // components: path.resolve(__dirname, 'src/components'),
    // router: path.resolve(__dirname, 'src/router'),
    // api: path.resolve(__dirname, 'src/api'),
    // store: path.resolve(__dirname, 'src/store'),
    // reducers: path.resolve(__dirname, 'src/reducers'),
    // sagas: path.resolve(__dirname, 'src/sagas'),
    // assets: path.resolve(__dirname, 'src/assets,'),
    // mock: path.resolve(__dirname, 'mock'),
    // utils: path.resolve(__dirname, 'src/utils')
  }),
);

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
