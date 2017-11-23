var path = require('path');

module.exports = {
    entry: {
      'bundled': './src/client/ctf.ts',
    //   'bundled.min': './src/app.ts'
    },
    output: {
      path: path.resolve(__dirname, '_bundles'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'MyLib',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     minimize: true,
    //     sourceMap: true,
    //     include: /\.min\.js$/,
    //   })
    // ],
    module: {
      loaders: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        query: {
          declaration: false,
        }
      }]
    }
  }
  