var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var sass = require("gulp-sass");
var paths = {
    pages: ['src/*.html'],
    libs: [
        'libs/**/*.*'
    ],
    watch: [
        "./src/*.ts",
        "./src/**/*.ts",
        "./src/*.html",
        "./scss/*.scss"
    ],
    assets: [
        'resources/**/*.*'
    ]
};

gulp.task("index", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("libs", function () {
    return gulp.src(paths.libs)
        .pipe(gulp.dest("./dist/libs"));
});

gulp.task("resources", function () {
    return gulp.src(paths.assets)
        .pipe(gulp.dest("./dist/resources"));
});

gulp.task("watch", function() {
    gulp.watch(paths.watch, ["default"]);
});

gulp.task("sass", function(done) {
    gulp.src("./scss/interface.scss")
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest("./dist"))
        .on("end", done);
});

gulp.task("default", ["index", "libs", "sass", "resources"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});