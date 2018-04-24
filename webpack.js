const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    'categorised-url': './lib/categorised-url.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({ sourceMap: true })
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'CategorisedUrl'
  }
};
