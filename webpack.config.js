var path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    pathinfo: false
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: require.resolve('./src/scripts/index'),
        loaders: ["expose?reactSearch", "babel-loader?presets[]=react,presets[]=es2015"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};