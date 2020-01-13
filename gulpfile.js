const { dest, src, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const sass = require("gulp-sass");

// 監視用
function watchFiles() {
  watch("public/*.html").on('change', browserSync.reload);
  watch("public/**/*.html").on('change', browserSync.reload);
  watch("public/**/**/*.css").on('change', browserSync.reload);
}

// サーバー起動
function serve() {
    browserSync.init({
      server: "public"
    });
}

exports.default = parallel(serve, watchFiles);