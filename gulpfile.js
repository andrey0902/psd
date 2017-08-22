let gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    tsify = require("tsify"),
    babelify = require('babelify');

// Создание таска common.js
gulp.task('scripts-js', function () {
    return browserify({
        entries: ['app/js/app.js', 'app/js/index.js'],
        extensions: ['.js'],
        debug: true
    })
        .transform('babelify', {
            presets: ["es2015", "react"],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app/production'))
        .pipe(browserSync.reload({ stream: true }));
});



// Создание таска стилей
gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('sass/**/*.+(scss|sass)') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true }))
});

// Создание таска browser-sync для автомат. обновления
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false,
    });
});

// Создание watcher
gulp.task('watch', ['browser-sync', 'sass', /*'scripts-js'*/], function () {
    gulp.watch('./sass/**/*.+(scss|sass)', ['sass']);
    gulp.watch('./**/*.html', browserSync.reload);
    gulp.watch('./scripts/**/*.js', browserSync.reload);
    gulp.watch('./js/**/*.+(jsx|js)', ['scripts-js']);
    // gulp.watch('app/ts/**/*.ts', ['scripts-ts']);
});

gulp.task('default', ['watch']);







/*
gulp.task('sass:watch', function () {
    gulp.watch('./sass/!**!/!*.scss', ['sass']);
});

gulp.task('minCss',function () {
    return gulp.src('css/!**!/!*.css')
        .pipe(minifyCss({KeepBreak:true}))
        .pipe(gulp.dest('app/css/'))
});

gulp.task('minJson', function () {
    gulp.src('./!**!/!*.json')
        .pipe(jsonmin())
        .pipe(gulp.dest('./app/'));
});*/
