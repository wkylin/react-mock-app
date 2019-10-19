const { override, fixBabelImports, addLessLoader, disableEsLint } = require('customize-cra');
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
    libraryName:'antd',
    libraryDirectory:'es',
    style:true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars:{
      '@primary-color': '#55c0ff',
      '@success-color': '#55c0ff',
    },
  })
);

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
