var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('../resources/initial-content/static/clientlibs/portfolio/css'));
});

gulp.task('js', function () {
   return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './js/**/*.js'
    ])
   .pipe(concat('scripts.portfolio-all.min.js'))
   .pipe(gulp.dest('../resources/initial-content/static/clientlibs/portfolio/js'))
});

gulp.task('default', ['sass', 'js']);