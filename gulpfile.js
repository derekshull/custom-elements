var gulp = require('gulp');
var styleInject = require("gulp-style-inject");
var scsslint = require('gulp-scsslint');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('components'));
});
 
gulp.task('lint', function() {
  gulp.src('components/**/*.scss')
    .pipe(scsslint({
    	"config": "lint.yml"
    }))
    .pipe(scsslint.reporter());
});

gulp.task('build-components', function() {
  	return gulp.src("./components/**/*.html")
    	.pipe(styleInject())
    	.pipe(gulp.dest("./dist"));
});