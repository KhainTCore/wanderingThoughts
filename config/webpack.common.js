var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: { // Entry point files that define the bundles
    'polyfills': './config/polyfills.ts',
    'vendor': './config/vendor.ts',
    'themes': './config/themes.ts',
    'app': './src/main.ts'
  },

  resolve: { // How to resolve filenames when they lack extensions
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [ // How files are loaded
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader', // A Loader to Transpile TypeScript
            options: { configFileName: helpers.root('src/tsconfig.app.json') }
          } , 'angular2-template-loader' // Loads Angular Components' tempalte and styles
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader' // For Component Templates
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, // Images and Fonts
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" }, 
            {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }]
        })
      },
      {
        test: /\.css$/, // Aplication wide styles
        exclude: helpers.root('src/app'),
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader?sourceMap'] })
      },
      {
        test: /\.css$/, // Component scoped styles
        include: helpers.root('src/app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css"),
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      // /angular(\\|\/)core(\\|\/)@angular/,
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('./src/app'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};