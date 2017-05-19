var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");


gulp.task('css', function() {
    return gulp.src('./style.css')
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../css'))
        .pipe(notify('Autoprefixer Success!'));
});

gulp.task('minCss', function() {
    return gulp.src('../css/style.css')
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../css'))
        .pipe(notify('minCSS Success!'));
});

gulp.task('watch_css', function() {
    gulp.watch('./style.css', ['css'])
});
gulp.task('watch_min', function() {
    gulp.watch('../css/style.css', ['minCss'])
});


gulp.task('default', ['css', 'minCss', 'watch_min', 'watch_css']);