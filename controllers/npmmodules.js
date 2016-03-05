var cheerio = require('cheerio');
var request = require('request');


var NPMModules = function() {
	this.url = "https://www.npmjs.com/browse/star";
	this.searchUrl = "https://www.npmjs.com/search?q=";

	this.searchedModules = [];

	this.getURL = function() {
		return this.url;
	}

	this.searchNPM = function(term, callback) {
		console.log(term);
		request(this.searchUrl+term, function(error, response, body) {
			console.log("GOT THE BODY");
			this.searchedModules = parseBody(body, true);
			// console.log(this.searchedModules)
			callback(this.searchedModules);
		});
	}

	this.getSearchResults = function() {
		return this.searchedModules;
	}

	this.getNewTopModules = function() {
		// this.parseBody();
		// console.log(this.url);
		request(this.url, function(error, response, body) {
			// console.log(body);
			parseBody(body, false);
		});
	}

	this.getCurrentTopModules = function() {
		return [{ name: 'express',
				  url: '/package/express',
				  desc: 'Fast, unopinionated, minimalist web framework' },
				{ name: 'gulp',
				  url: '/package/gulp',
				  desc: 'The streaming build system' },
				{ name: 'async',
				  url: '/package/async',
				  desc: 'Higher-order functions and common patterns for asynchronous code' },
				{ name: 'request',
				  url: '/package/request',
				  desc: 'Simplified HTTP request client.' },
				{ name: 'lodash',
				  url: '/package/lodash',
				  desc: 'Lodash modular utilities.' },
				{ name: 'browserify',
				  url: '/package/browserify',
				  desc: 'browser-side require() the node way' },
				{ name: 'grunt',
				  url: '/package/grunt',
				  desc: 'The JavaScript Task Runner' },
				{ name: 'pm2',
				  url: '/package/pm2',
				  desc: 'Production process manager for Node.JS applications with a built-in load balancer.' },
				{ name: 'socket.io',
				  url: '/package/socket.io',
				  desc: 'node.js realtime framework server' },
				{ name: 'commander',
				  url: '/package/commander',
				  desc: 'the complete solution for node.js command-line programs' },
				{ name: 'mongoose',
				  url: '/package/mongoose',
				  desc: 'Mongoose MongoDB ODM' },
				{ name: 'mocha',
				  url: '/package/mocha',
				  desc: 'simple, flexible, fun test framework' },
				{ name: 'forever',
				  url: '/package/forever',
				  desc: 'A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)' },
				{ name: 'bower',
				  url: '/package/bower',
				  desc: 'The browser package manager' },
				{ name: 'moment',
				  url: '/package/moment',
				  desc: 'Parse, validate, manipulate, and display dates' },
				{ name: 'underscore',
				  url: '/package/underscore',
				  desc: 'JavaScript&apos;s functional programming helper library.' },
				{ name: 'chalk',
				  url: '/package/chalk',
				  desc: 'Terminal string styling done right. Much color.' },
				{ name: 'gulp-uglify',
				  url: '/package/gulp-uglify',
				  desc: 'Minify files with UglifyJS.' },
				{ name: 'q',
				  url: '/package/q',
				  desc: 'A library for promises (CommonJS/Promises/A,B,D)' },
				{ name: 'cheerio',
				  url: '/package/cheerio',
				  desc: 'Tiny, fast, and elegant implementation of core jQuery designed specifically for the server' },
				{ name: 'debug',
				  url: '/package/debug',
				  desc: 'small debugging utility' },
				{ name: 'npm',
				  url: '/package/npm',
				  desc: 'a package manager for JavaScript' },
				{ name: 'passport',
				  url: '/package/passport',
				  desc: 'Simple, unobtrusive authentication for Node.js.' },
				{ name: 'gulp-concat',
				  url: '/package/gulp-concat',
				  desc: 'Concatenates files' },
				{ name: 'colors',
				  url: '/package/colors',
				  desc: 'get colors in your node.js console' },
				{ name: 'nodemailer',
				  url: '/package/nodemailer',
				  desc: 'Easy as cake e-mail sending from your Node.js applications' },
				{ name: 'bluebird',
				  url: '/package/bluebird',
				  desc: 'Full featured Promises/A+ implementation with exceptionally good performance' },
				{ name: 'redis',
				  url: '/package/redis',
				  desc: 'Redis client library' },
				{ name: 'hapi',
				  url: '/package/hapi',
				  desc: 'HTTP Server framework' },
				{ name: 'coffee-script',
				  url: '/package/coffee-script',
				  desc: 'Unfancy JavaScript' },
				{ name: 'gulp-sass',
				  url: '/package/gulp-sass',
				  desc: 'Gulp plugin for sass' },
				{ name: 'react',
				  url: '/package/react',
				  desc: 'React is a JavaScript library for building user interfaces.' },
				{ name: 'karma',
				  url: '/package/karma',
				  desc: 'Spectacular Test Runner for JavaScript.' },
				{ name: 'jade',
				  url: '/package/jade',
				  desc: 'A clean, whitespace-sensitive template language for writing HTML' },
				{ name: 'mysql',
				  url: '/package/mysql',
				  desc: 'A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.' },
				{ name: 'yo',
				  url: '/package/yo',
				  desc: 'CLI tool for running Yeoman generators' }];
	}

}

function parseBody(body, isSearch) {
	var $ = cheerio.load(body);

	var modules = [];

	// console.log($);

	$('.package-details').each(function(i, elem) {
		var module = cheerio.load(elem);
		var name = module('h3 > a').html();
		var url = module('h3 > a').attr('href');
		var desc = module('p.description').html();
		var obj = {
			name:name,
			url:url,
			desc:desc
		}
		console.log(obj);
		modules.push(obj);
	});

	return modules;

}

module.exports = new NPMModules();