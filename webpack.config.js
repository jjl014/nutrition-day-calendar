const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/app.jsx',
  output: {
    path: path.resolve(__dirname, 'assets', 'javascripts'),
    publicPath: "/assets/javascripts",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
