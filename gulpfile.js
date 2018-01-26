var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat-util'),
    watch = require('gulp-watch');

var kurveSources = [
    './src/Kurve.js',
    './src/KurveSound.js',
];

gulp.task('build', function() {
    gulp.src(kurveSources)
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(concat('kurve.min.js', {sep: ''}))
        .pipe(gulp.dest('./resources/js/'));
});

gulp.task('develop', function() {
    gulp.src(kurveSources)
        .pipe(concat('kurve.min.js', {sep: '\n\n'}))
        .pipe(gulp.dest('./resources/js/'));
});

gulp.task('watch', function(){
    watch('src/*', function(){
        gulp.start('develop')
    })
});