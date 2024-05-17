const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // Other rules...
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
}
