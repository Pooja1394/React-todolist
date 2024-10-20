const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,  // Add this rule for CSS
        use: ['style-loader', 'css-loader'] // Process CSS with these loaders
      }
    ]
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'public')  // Use `static` instead of `contentBase`
    },
    // contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};
