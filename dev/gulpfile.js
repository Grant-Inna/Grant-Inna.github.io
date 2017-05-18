var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");


gulp.task('css', function() {
    return gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError)) // Turn scss file into css
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('CSS Success!'));
});

gulp.task('minCss', function() {
    return gulp.src('../css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../css'))
        .pipe(notify('minCSS Success!'));
});

gulp.task('watch_scss', function() {
    gulp.watch('./style.scss', ['css'])
    gulp.watch('./_variables.scss', ['css'])
    gulp.watch('./_media.scss', ['css'])
});
gulp.task('watch_min', function() {
    gulp.watch('../css/style.css', ['minCss'])
});


gulp.task('default', ['css', 'minCss', 'watch_min', 'watch_scss']);