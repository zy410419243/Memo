const path = require('path');
const cwd = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: path.join(cwd + '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '../index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(cwd, '/src/mapping'),
        to: path.join(cwd, '/dist/lib/main/mapping'),
      },
      {
        from: path.join(cwd, '/src/layout'),
        to: path.join(cwd, 'dist/lib/main/layout'),
      },
    ]),
  ],
};
