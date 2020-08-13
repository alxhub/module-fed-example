const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../packed'),
    publicPath: "http://localhost:4002/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib',
      filename: "remoteEntry.js",
      exposes: {
        '.': './src/index',
      },
      shared: {
        '@angular/animations': {singleton: true},
        '@angular/core': {singleton: true},
        '@angular/common': {singleton: true},
        '@angular/platform-browser': {singleton: true},
        'rxjs': {singleton: true},
        'zone.js': {singleton: true},
      },
    }),
  ],
};
