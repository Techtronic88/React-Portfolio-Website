
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/
      },
      // {
      //   loaders: [
      //     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      //   ]
      // },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader?name=[name].[ext]&outputPath=js/js/assets/',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            }]
          },
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'ttf-loader',
                options: {
                  name: './js/font/[hash].[ext]',
                },
              },
            ]
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
