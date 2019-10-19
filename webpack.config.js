const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  optimization:{
    minimizer:[
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        },
      }),
    ]
  }
};
