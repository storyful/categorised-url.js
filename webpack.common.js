const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'categorised-url.js': './lib/categorised-url.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  }
};
