const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: "production",
  entry: {
    'battery.config': './src/index.js',
  },
  output: {
    path: __dirname+'/dist',
    filename: "[name].js",
    library: 'config',
    libraryTarget: "commonjs2"
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
    ]
  }
}