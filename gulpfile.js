    var gulp = require('gulp'),
        runSequence = require('run-sequence'),
        ect = require('gulp-ect-simple'),
        browserSync = require('browser-sync').create(),
        $ = require("gulp-load-plugins")();

    var gutil = require("gulp-util"),
        notify = require('gulp-notify'),
        source = require("vinyl-source-stream"),
        buffer = require('vinyl-buffer'),
        browserify = require("browserify"),
        watchify = require("watchify"),
        babelify = require("babelify");
        source = require('vinyl-source-stream'),
        rename = require('gulp-rename'),
        glob = require('glob'),
        es = require('event-stream');

    var DIR = {
            DEV: './src/',
            RELEASE: './dist/',
        },
        PATH = {
            ECT: '**/*.ect',
            HTML: '**/*.html',
            PHP: '**/*.php',
            CSS: '**/*.css',
            SASS: '**/*.scss',
            JS: '**/*.js',
            IMG: '**/*.{png,jpg,gif,ico,svg}',
            FONT: '**/*.{eot,woff,ttf,woff2}',
            JSON: '**/*.json',
        };


    /**=================================================
     * @DEVELOP TASK
     =================================================*/
    //SASS
    gulp.task('_sass', function(){
        return gulp
            .src(DIR.DEV + PATH.SASS)
            .pipe($.plumber({
                errorHandler: $.notify.onError('SASS-ERROR: <%= error.message %>')
            }))
            .pipe($.sass())
            .pipe($.pleeease({
                fallbacks: { autoprefixer: ['last 4 versions'] },
                optimizers: { minifier: false }
            }))
            .pipe(gulp.dest(DIR.DEV))
            .pipe(browserSync.stream());
    });

    //ECT
    gulp.task('_ect', function(){
        return gulp
            .src([
                DIR.DEV + PATH.ECT,
                '!' + DIR.DEV + '**/_*.ect'
            ])
            .pipe($.plumber({
                errorHandler: $.notify.onError('ERROR: <%= error.message %>')
            }))
            .pipe(ect({
                options: {root: DIR.DEV, ext: '.ect', open: '[%', close: '%]' },
                data: {}
            }))
            .pipe(gulp.dest(DIR.DEV))
            .pipe(browserSync.stream());
    });

    //JS
    gulp.task('_browserify', function(done) {
        glob(DIR.DEV + '**/**-src.js', function(err, files) {
            if(err){
                done(err);
            }

            var tasks = files.map(function(entry) {
                return browserify({
                        debug: true,
                        delay: 300,
                        entries: [entry]
                    })
                    .transform(babelify, {
                        presets: ["es2015"]
                    })
                    .bundle()
                    .on('error', function (err) {
                        console.error(err.toString());
                        this.emit("end");
                    })
                    .pipe(source(entry))
                    .pipe(rename(function(path){
                        path.basename = path.basename.replace('-src', '-build');
                        path.extname = '.js';
                    }))
                    .pipe(gulp.dest('./'));
            });

            es.merge(tasks).on('end', done);
        })
    });

    //WATCH
    gulp.task("_watch", function () {
        gulp.watch([
            DIR.DEV + '**/*.js',
            '!' + DIR.DEV + '**/**-build.js',
        ], ['_browserify', browserSync.reload]);
        gulp.watch(DIR.DEV + PATH.ECT, ['_ect']);
        gulp.watch(DIR.DEV + PATH.HTML).on('change', browserSync.reload);
        gulp.watch(DIR.DEV + PATH.SASS, ['_sass']);
        // gulp.watch(DIR.DEV + PATH.CSS).on('change', browserSync.reload);
    });

    //BROWSER SYNC
    gulp.task("_server", function () {
        browserSync.init({
            server: 'src',
            port: 3000,
            logLevel: "debug",
            online: false,
            ui: false
        });
    });

    //COPY
    gulp.task('_copy-clean', function(){
        return gulp
            .src(DIR.RELEASE, { read: false })
            .pipe($.clean());
    });

    gulp.task('_copy', ['_copy-clean'], function(){
        return gulp
            .src([
                DIR.DEV + PATH.HTML,
                DIR.DEV + PATH.CSS,
                DIR.DEV + '**/**-build.js',
                DIR.DEV + '**/FRMS.js',
                DIR.DEV + '**/libs.js',
                DIR.DEV + '**/data/*.js',
                DIR.DEV + PATH.IMG,
                DIR.DEV + PATH.JSON,
                DIR.DEV + PATH.FONT,
            ])
            .pipe(gulp.dest(DIR.RELEASE));
    });

    //BEAUTIFIER
    gulp.task('_beautifier', function(){
        return gulp.src([
                DIR.RELEASE + PATH.HTML
            ])
            .pipe($.jsbeautifier({
                indentSize: 4
            }))
            .pipe(gulp.dest(DIR.RELEASE))
    });

    //CONCAT
    gulp.task('_concat', function() {
        gulp
            .src([
                './src/assets/js/_libs-modules/core/*.js',
                './src/assets/js/_libs-modules/*.js',
                '!./src/assets/js/_libs-modules/**/_*.js'
            ])
            .pipe($.concat('libs.js'))
            .pipe(gulp.dest('./src/assets/js/'));
    });

    //UGLIFY
    gulp.task('_uglify', function(){
        return gulp
            .src([
                DIR.RELEASE + '**/**-build.js'
            ])
            .pipe($.uglify())
            .pipe(gulp.dest(DIR.RELEASE));
    });


    // /**-----------
    //  * RUN TASK
    //  -----------*/
    gulp.task('default', function(callback){
        runSequence(
            [
                // '_ect',
                '_concat',
                '_browserify',
                '_sass',
                '_watch',
                '_server'
            ],
            callback
        );
    });

    gulp.task('production', function(callback){
        runSequence(
            '_copy',
            '_beautifier',
            '_uglify',
            callback
        );
    });
