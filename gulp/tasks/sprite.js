import gulp from 'gulp';

// Plugins
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';


// Sprite task
export default () => {
    return gulp.src($.path.svgSprite.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite.svg",
					}
				}
			}))
        .pipe(gulp.dest($.path.svgSprite.dist));
};
