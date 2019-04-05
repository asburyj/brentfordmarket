'use strict';

const Gulp = require('gulp');
const HtmlMin = require('gulp-htmlmin');
const WebP = require('gulp-webp');
const Minify = require('gulp-minify');
const Clean = require('gulp-clean-css');

Gulp.task('html', () => {
    return Gulp.src('src/*.html')
        .pipe(HtmlMin({
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            collapseBooleanAttributes: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true
        }))
        .pipe(Gulp.dest('dist'));
});

Gulp.task('css', () => {
    return Gulp.src('src/styles/*.css')
        .pipe(Clean({
            compatibility: 'ie8'
        }))
        .pipe(Gulp.dest('dist/styles'));
});

Gulp.task('js', () => {
    return Gulp.src('src/js/*.js')
        .pipe(Minify())
        .pipe(Gulp.dest('dist/js'));
});

Gulp.task('images', () => {
    return Gulp.src('src/images/*.jpg')
        .pipe(WebP())
        .pipe(Gulp.dest('dist/images'));
});

Gulp.task('libcss', () => {
    return Gulp.src([
        'src/lib/fontawesome/css/brands.css',
        'src/lib/fontawesome/css/fontawesome.css'
    ])
        .pipe(Clean({
            compatibility: 'ie8'
        }))
        .pipe(Gulp.dest('dist/lib'));
});

Gulp.task('libjs', () => {
    return Gulp.src([
        'src/lib/fontawesome/js/brands.js',
        'src/lib/fontawesome/js/fontawesome.js'
    ])
        .pipe(Minify())
        .pipe(Gulp.dest('dist/lib'));
});

Gulp.task('sitemap', () => {
    return Gulp.src('src/sitemap.xml')
        .pipe(Gulp.dest('dist'));
})

Gulp.task('default', Gulp.parallel('html','css','js','images', function(done) {
    done();
}));