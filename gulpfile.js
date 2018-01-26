let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
let concat = require('gulp-concat-util');
let babelify = require('babelify');
let watch = require('gulp-watch');

let kurveSources = [
    './src/Kurve.js'
];

gulp.task('build', function () {
    gulp.src(kurveSources)
        .pipe(uglify())
        .pipe(concat('kurve.min.js', {sep: ''}))
        .pipe(gulp.dest('./resources/js/'));
});

gulp.task('develop', function () {
    gulp.src(kurveSources)
        .pipe(concat('kurve.min.js', {sep: '\n\n'}))
        .pipe(gulp.dest('./resources/js/'));
});

gulp.task('watch', function () {
    watch('src/*', function () {
        gulp.start('develop')
    })
});