const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const name = 'brazilian-address-component';

module.exports = {
  mode: 'development',
  entry: `./src/${name}.ts`,
  devtool: 'source-map',
  output: {
    filename: `${name}.min.js`,
    library: 'BrazilianAddressComponent',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${name}.style.min.css`,
    }),
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'examples'), path.join(__dirname, 'dist')],
    port: '8000',
  },
};
