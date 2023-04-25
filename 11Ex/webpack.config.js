const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
          hash: true,
          title: 'Webpack App',
          header: 'Title Webpack',
          body: 'Hi there it\'s an example for using webpack',
          metaDesc: 'Webpack Example Description',
          template: './src/index.html',
          filename: 'index.html',
          inject: 'body'
        })
      ],
    mode: 'development',
    output: {
        clean: true
    },
    devServer: {
        static: './dist',
        open: true
    }
    
};
