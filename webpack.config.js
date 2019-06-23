
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
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
      {
        test: /\.(svg|png|jpg|gif)$/,
                use: {
                 loader: "file-loader",
                 options: {
                     name:"[name].[ext]",
                     outputPath: "images"
                 } 
               }
        // test: /\.(gif|png|jpe?g|svg)$/i,
        //   use: [
        //     'file-loader?name=[name].[ext]&outputPath=js/js/assets/',
        //     {
        //       loader: 'image-webpack-loader',
        //       options: {
        //         bypassOnDebug: true, // webpack@1.x
        //         disable: true, // webpack@2.x and newer
        //       },
        //     }]
          },
          {
            test: /\.ttf$/,
            use: [
              {
                loader: 'ttf-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "font"
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