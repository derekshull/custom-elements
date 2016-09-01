var gulp = require('gulp');
var styleInject = require("gulp-style-inject");

gulp.task('css', function() {
  	return gulp.src("./components/**/*.html")
    	.pipe(styleInject())
    	.pipe(gulp.dest("./dist"));
});