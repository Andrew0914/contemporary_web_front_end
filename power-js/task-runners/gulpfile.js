var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-csso");

gulp.task("sass", function () {
  return gulp
    .src("*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest("dist"));
});
