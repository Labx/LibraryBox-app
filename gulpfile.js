'use strict';
// generated on 2014-11-03 using generator-gulp-webapp 0.1.0

var project = {
  name: 'librarybox',
  port: 9282,
  livereloadPort: 56242
};
var pathes = {
    appDir: 'app',
    buildDir: 'dist',
    scripts: {
        dir: 'app/scripts',
        src:  'app/scripts/**/*.js',
        dest: 'dist/scripts'
    },
    styles: {
        dir: 'app/styles',
        src:  'app/styles/**/*.scss',
        dest: 'dist/styles'
    },
    images: {
        dir: 'app/images',
        src: 'app/images/**/*',
        dest: 'dist/images'
    },
    fonts: {
        dir: null,
        src: null,
        dest: 'dist/fonts'
    },
    html: {
        dir: null,
        src: 'app/views/**/*.html',
        dest: null
    },
    data: {
    	dir: 'app/data',
        src: 'app/data/**/*',
        dest: 'dist/data'
    }
};

var  gulp = require('gulp')
    ,SqliteToJson = require('sqlite-to-json')
    ,sqlite3 = require('sqlite3')
;

var karma = require('karma').server;

var db = new sqlite3.Database(pathes.data.dir+'/data.sqlite3'),
    exporter = new SqliteToJson({client: db})
;

// load plugins
var $ = require('gulp-load-plugins')();


gulp.task('styles', function () {
    return gulp.src(pathes.styles.dir+'/main.scss')
        .pipe($.rubySass({
        //.pipe($.sass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src(pathes.scripts.src)
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size())
        .pipe(gulp.dest(pathes.scripts.dest))
    ;
});

gulp.task('db-list-tables', function () {
    var db = new sqlite3.Database('data.sqlite3');
    var exporter = new SqliteToJson({client: db});
    exporter.tables(function (err, tables) {
        for (var t in tables) {
            console.info(tables[t]);
        }
    });

    return exporter;
});

gulp.task('db-authors', function () {
    var table = 'authors';
    exporter.save(table, pathes.data.dir+'/dump-'+table+'.json', function (err) {
        if (err) { console.error("\tdumping '"+table+"'… failed!")}
        else { console.log("\tdumping '"+table+"'… succeed :)"); }
    });
});

gulp.task('db-books', function () {
    var table = 'books';
    exporter.save(table, pathes.data.dir+'/dump-'+table+'.json', function (err) {
        if (err) { console.error("\tdumping '"+table+"'… failed!")}
        else { console.log("\tdumping '"+table+"'… succeed :)"); }
    });
});

gulp.task('db-tags', function () {
    var table = 'tags';
    exporter.save(table, pathes.data.dir+'/dump-'+table+'.json', function (err) {
        if (err) { console.error("\tdumping '"+table+"'… failed!")}
        else { console.log("\tdumping '"+table+"'… succeed :)"); }
    });
});

gulp.task('db-series', function () {
    var table = 'series';
    exporter.save(table, pathes.data.dir+'/dump-'+table+'.json', function (err) {
        if (err) { console.error("\tdumping '"+table+"'… failed!")}
        else { console.log("\tdumping '"+table+"'… succeed :)"); }
    });
});

gulp.task('db-dump', ['db:authors', 'db:books', 'db:tags', 'db:series'], function () { });

gulp.task('data', function () {
	require('gulp-util').log(pathes.scripts.dir+'/*.json');
    return gulp.src(pathes.scripts.dir+'/*.json')
        .pipe(gulp.dest(pathes.scripts.dest))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src(pathes.appDir+'/*.html')
        .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest(pathes.buildDir))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src(pathes.images.src)
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(pathes.images.dest))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(pathes.fonts.dest))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest(pathes.buildDir));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', pathes.buildDir], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: project.livereloadPort }))
        .use(connect.static(pathes.appDir))
        .use(connect.static('.tmp'))
        .use(connect.directory(pathes.appDir));

    require('http').createServer(app)
        .listen(project.port)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:'+project.port);
        });
});

gulp.task('serve', ['connect', 'styles'], function () {
    require('opn')('http://localhost:'+project.port);
});


// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src(pathes.styles.src)
        .pipe(wiredep({
            directory: pathes.appDir+'/bower_components'
        }))
        .pipe(gulp.dest(pathes.styles.dir));

    gulp.src(pathes.appDir+'/*.html')
        .pipe(wiredep({
            directory: pathes.appDir+'/bower_components',
            exclude: ['bootstrap-sass-official']
        }))
        .pipe(gulp.dest(pathes.appDir));
});


// tasks for testing
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/test/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/test/karma.conf.js'
    }, done);
});


gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes
    gulp.watch([
        pathes.appDir+'/*.html',
        '.tmp/styles/**/*.css',
        pathes.scripts.src,
        pathes.images.src
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch(pathes.styles.src, ['styles']);
    gulp.watch(pathes.scripts.src, ['scripts']);
    gulp.watch(pathes.images.src, ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
