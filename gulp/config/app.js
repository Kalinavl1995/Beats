const isProd = process.argv.includes('--poduction');
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd,
    },
    pug: {
        pretty: isDev,
        // data: {
        //     news: require('../data/news.json')
        // }
    },
    webpack: {
        mode: isProd ? "prodaction" : "development",
        entry: './src/js/main.js',
        output: {
            filename: './main.js',
          },
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    },
    svgSprite: {
        mode: {
            stack: {
                sprite: "../sprite.svg"  //sprite file name
            }
        },
    }
};