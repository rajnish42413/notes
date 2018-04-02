var gulp = require("gulp");
var concat = require("gulp-concat");
var bower = require("gulp-bower");
var uglify = require("gulp-uglify");
var minifyHTML = require("gulp-minify-html");
var minifyCSS = require("gulp-minify-css");
var open = require("gulp-open");

gulp.task("minify_html",function () {
    gulp.src("./devEnv/html/*.html")
        .pipe(concat("final.min.html"))
        .pipe(minifyHTML())
        .pipe(gulp.dest("./prodEnv/html"))
});

gulp.task("minify_css",function () {
    gulp.src("./devEnv/css/*.css")
        .pipe(concat("final.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest("./prodEnv/css"))
});


gulp.task("minify_js",function () {
    gulp.src("./devEnv/js/*.js")
        .pipe(concat("final.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./prodEnv/js"))
});

gulp.task("open",function () {
   gulp.src("./index.html")
       .pipe(open());
});

gulp.task("bower",function () {
    return bower();
});

gulp.task("default",["minify_html","minify_css","minify_js","bower","open"],function () {

});