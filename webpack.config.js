const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'app'),
  root: __dirname
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output:  {
    path: PATHS.root,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.css', '.js', '.json', '.jsx']
  }
}
