import gulp from 'gulp';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

// JavaScript task
export default () => {
    return gulp.src($.path.LIBS_JS, { sourcemaps: $.app.isDev })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JavaScript',
                message: error.message
            }))
        }))
        .pipe(concat('main.min.js', { newLine: ';' }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest($.path.js.dist, { sourcemaps: $.app.isDev }));
};
