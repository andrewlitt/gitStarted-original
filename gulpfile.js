// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var react = require('gulp-react');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

var config = {
	js:{
		dashboard: {
			files:[
				"./components/main.jsx"
			],
			outputFile:'all.js'
		},
		login: {
			files:[
				"./components/login.jsx"
			],
			outputFile:'login.js'
		},
		register: {
			files:[
				"./components/register.jsx"
			],
			outputFile:'register.js'
		}
	}
};
 

// Task
gulp.task('server', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: './index.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('./index.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	})
});

function compileJSX(part) {
	gulp.src(part.files)
	.pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(concat(part.outputFile))
    .pipe(react())
	.pipe(gulp.dest('public'));
}

gulp.task('compile-jsx', function() {
	try {
		compileJSX(config.js.dashboard);
		compileJSX(config.js.login);
		compileJSX(config.js.register);
	} catch (ex) { }
	return;
});

gulp.task('compile-stylus', function() {
	try {
		console.log('Compiling stylus...');
		return gulp.src('./assets/stylesheets/**/*.styl')
			.pipe(plumber({
		        handleError: function (err) {
		            console.log(err);
		            this.emit('end');
		        }
		    }))
			.pipe(stylus())
			.pipe(gulp.dest('./public/css'));
	} catch (ex) {}
	return;
});

gulp.task('react-compile', function() {
	gulp.watch('components/**/*.jsx', ['compile-jsx']);
});

gulp.task('stylus-compile', function() {
	gulp.watch('assets/stylesheets/**/*.styl', ['compile-stylus']);
});

// Task
gulp.task('default', ['server', 'react-compile', 'stylus-compile', 'compile-stylus', 'compile-jsx'])