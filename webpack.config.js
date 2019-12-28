const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
      }),
      new TerserPlugin({
        sourceMap: false,
      }),
    ],
  },
  devServer: {
    historyApiFallback: true,
    index: 'index.html'
  }
};
