const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: './', // Ensure the correct path for GitHub Pages
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',  // Use the existing index.html from your public folder
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },
  };
};
