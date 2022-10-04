module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  output: {
    path: `${__dirname}`,
    filename: 'main.js'
  },
  devServer: {
    static: {
      directory: `${__dirname}`,
      watch: true,
    },
    watchFiles: ['./assets/sass/**/*.scss', '*.html', '*.php', './assets/js/*.js'],
    open: true,
    hot:true,
  },
};