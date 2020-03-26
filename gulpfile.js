var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var imagemin = require('gulp-imagemin');
var connectPhp = require('gulp-connect-php'); // 用來連結php的
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 使用套件事件

// 設定path 路徑
var web = {
    html: [
        'dev/*.html',
        'dev/**/*.html'
    ],
    sass: [
        'dev/sass/*.scss',
        'dev/sass/**/*.scss'
    ],
    js: [
        'dev/js/*.js',
        'dev/js/**/*.js',
    ],
    img: [
        'dev/images/*.*',
        'dev/images/**/*.*'
    ],
    font: [
        'dev/font/*.*',
        'dev/font/**/*.*'
    ],
    php: [
        'dev/php/*.*',
        'dev/php/**/*.*'
    ]
}
var options = {
    base: './dest', // 檔案位置
    debug: true,
    bin: 'C:/php-7.4.3-nts-Win32-vc15-x64/php.exe', // php執行檔的路徑
    ini: 'C:/php-7.4.3-nts-Win32-vc15-x64/php.ini', // php的ini檔的路徑
    port: 8080, // 自行定義端口
};

var options = {
    base: './dest', // 檔案位置
    debug: true, 
    bin: 'C:/php-7.4.3-nts-Win32-vc15-x64/php', // php執行檔的路徑
    ini: 'C:/php-7.4.3-nts-Win32-vc15-x64/php.ini', // php的ini檔的路徑
    port: 8080,  // 自行定義端口
};

//流程
gulp.task('concatjs', function() {
    gulp.src('dev/js/*.js').pipe(gulp.dest('dest/js'));
});

gulp.task('concatphp', function() {
    gulp.src('dev/php/*.php').pipe(gulp.dest('dest/php'));
});

gulp.task('img', function() {
    gulp.src(web.img).pipe(gulp.dest('dest/images'));
});

gulp.task('font', function() {
    gulp.src(web.font).pipe(gulp.dest('dest/font'));
});

//任務串連

gulp.task('concatcss', ['sass'], function() { //目前沒用到
    gulp.src('/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(gulp.dest('dest/css'));
});

gulp.task('sass', function() { 
    gulp.src(['dev/sass/*.scss', 'dev/sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        // .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('dest/css'));
});

//打包html
gulp.task('fileinclude', function() {
    gulp.src(['dev/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dest'));
});

// 壓縮圖片
gulp.task('minfly_img', function() {
    gulp.src('dev/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/min_img'));
})

// 和瀏覽器同步
gulp.task('default', function() { // default 只要打gulp 即可執行
    // browserSync.init({
    //     server: {
    //         baseDir: "./dest",
    //         index: "customRoute.html"
    //     }
    // });
    browserSync.init({
        server: {
            baseDir: './dest',
            proxy: 'localhost:8080', // 網址路徑必須跟php端口一樣
            port: 3000,
            watch: true,
            index: "./index.html"
        }
    });
    connectPhp.server(options); // 啟動
    gulp.watch(web.html, ['fileinclude']).on('change', reload);
    gulp.watch(web.sass, ['sass']).on('change', reload);
    gulp.watch(web.js, ['concatjs']).on('change', reload);
    gulp.watch(web.img, ['img']).on('change', reload);
    gulp.watch(web.font, ['font']).on('change', reload);
    gulp.watch(web.php, ['concatphp']).on('change', reload);
});