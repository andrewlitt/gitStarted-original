var cheerio = require('cheerio');
var request = require('request');


var NPMModules = function() {
	this.url = "https://www.npmjs.com/browse/star";
	this.searchUrl = "https://www.npmjs.com/search?q=";

	this.searchedModules = [];
	this.topModules = [];

	this.getURL = function() {
		return this.url;
	}

	this.searchNPM = function(term, callback) {
		request(this.searchUrl+term, function(error, response, body) {
			this.searchedModules = parseBody(body);
			callback(this.searchedModules);
		});
	}

	this.getSearchResults = function() {
		return this.searchedModules;
	}

	this.getNewTopModules = function() {
		request(this.url, function(error, response, body) {
			this.topModules = parseBody(body);
		});
	}

	this.getCurrentTopModules = function() {
		return [{ name: 'express',
				  url: '/package/express',
				  desc: 'Fast, unopinionated, minimalist web framework',
				  version: '4.13.4' },
				{ name: 'gulp',
				  url: '/package/gulp',
				  desc: 'The streaming build system',
				  version: '3.9.1' },
				{ name: 'async',
				  url: '/package/async',
				  desc: 'Higher-order functions and common patterns for asynchronous code',
				  version: '1.5.2' },
				{ name: 'request',
				  url: '/package/request',
				  desc: 'Simplified HTTP request client.',
				  version: '2.69.0' },
				{ name: 'lodash',
				  url: '/package/lodash',
				  desc: 'Lodash modular utilities.',
				  version: '4.6.1' },
				{ name: 'browserify',
				  url: '/package/browserify',
				  desc: 'browser-side require() the node way',
				  version: '13.0.0' },
				{ name: 'grunt',
				  url: '/package/grunt',
				  desc: 'The JavaScript Task Runner',
				  version: '0.4.5' },
				{ name: 'pm2',
				  url: '/package/pm2',
				  desc: 'Production process manager for Node.JS applications with a built-in load balancer.',
				  version: '1.0.2' },
				{ name: 'socket.io',
				  url: '/package/socket.io',
				  desc: 'node.js realtime framework server',
				  version: '1.4.5' },
				{ name: 'commander',
				  url: '/package/commander',
				  desc: 'the complete solution for node.js command-line programs',
				  version: '2.9.0' },
				{ name: 'mongoose',
				  url: '/package/mongoose',
				  desc: 'Mongoose MongoDB ODM',
				  version: '4.4.6' },
				{ name: 'mocha',
				  url: '/package/mocha',
				  desc: 'simple, flexible, fun test framework',
				  version: '2.4.5' },
				{ name: 'forever',
				  url: '/package/forever',
				  desc: 'A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)',
				  version: '0.15.1' },
				{ name: 'bower',
				  url: '/package/bower',
				  desc: 'The browser package manager',
				  version: '1.7.7' },
				{ name: 'moment',
				  url: '/package/moment',
				  desc: 'Parse, validate, manipulate, and display dates',
				  version: '2.11.2' },
				{ name: 'underscore',
				  url: '/package/underscore',
				  desc: 'JavaScript&apos;s functional programming helper library.',
				  version: '1.8.3' },
				{ name: 'chalk',
				  url: '/package/chalk',
				  desc: 'Terminal string styling done right. Much color.',
				  version: '1.1.1' },
				{ name: 'gulp-uglify',
				  url: '/package/gulp-uglify',
				  desc: 'Minify files with UglifyJS.',
				  version: '1.5.3' },
				{ name: 'q',
				  url: '/package/q',
				  desc: 'A library for promises (CommonJS/Promises/A,B,D)',
				  version: '1.4.1' },
				{ name: 'cheerio',
				  url: '/package/cheerio',
				  desc: 'Tiny, fast, and elegant implementation of core jQuery designed specifically for the server',
				  version: '0.20.0' },
				{ name: 'debug',
				  url: '/package/debug',
				  desc: 'small debugging utility',
				  version: '2.2.0' },
				{ name: 'npm',
				  url: '/package/npm',
				  desc: 'a package manager for JavaScript',
				  version: '3.8.0' },
				{ name: 'passport',
				  url: '/package/passport',
				  desc: 'Simple, unobtrusive authentication for Node.js.',
				  version: '0.3.2' },
				{ name: 'gulp-concat',
				  url: '/package/gulp-concat',
				  desc: 'Concatenates files',
				  version: '2.6.0' },
				{ name: 'colors',
				  url: '/package/colors',
				  desc: 'get colors in your node.js console',
				  version: '1.1.2' },
				{ name: 'nodemailer',
				  url: '/package/nodemailer',
				  desc: 'Easy as cake e-mail sending from your Node.js applications',
				  version: '2.3.0' },
				{ name: 'redis',
				  url: '/package/redis',
				  desc: 'Redis client library',
				  version: '2.4.2' },
				{ name: 'bluebird',
				  url: '/package/bluebird',
				  desc: 'Full featured Promises/A+ implementation with exceptionally good performance',
				  version: '3.3.3' },
				{ name: 'hapi',
				  url: '/package/hapi',
				  desc: 'HTTP Server framework',
				  version: '13.0.0' },
				{ name: 'coffee-script',
				  url: '/package/coffee-script',
				  desc: 'Unfancy JavaScript',
				  version: '1.10.0' },
				{ name: 'gulp-sass',
				  url: '/package/gulp-sass',
				  desc: 'Gulp plugin for sass',
				  version: '2.2.0' },
				{ name: 'react',
				  url: '/package/react',
				  desc: 'React is a JavaScript library for building user interfaces.',
				  version: '0.14.7' },
				{ name: 'karma',
				  url: '/package/karma',
				  desc: 'Spectacular Test Runner for JavaScript.',
				  version: '0.13.21' },
				{ name: 'jade',
				  url: '/package/jade',
				  desc: 'A clean, whitespace-sensitive template language for writing HTML',
				  version: '1.11.0' },
				{ name: 'mysql',
				  url: '/package/mysql',
				  desc: 'A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.',
				  version: '2.10.2' },
				{ name: 'yo',
				  url: '/package/yo',
				  desc: 'CLI tool for running Yeoman generators',
				  version: '1.7.0' }];
	}

}

function parseBody(body) {
	var $ = cheerio.load(body);

	var modules = [];

	// console.log($);

	$('.package-details').each(function(i, elem) {
		var module = cheerio.load(elem);
		var name = module('h3 > a').html();
		var url = module('h3 > a').attr('href');
		var desc = module('p.description').html();
		var version = module('a.version').html();
		if (version == null) {
			version = module('span.version').html();
		}
		var obj = {
			name:name,
			url:url,
			desc:desc,
			version:version
		}
		modules.push(obj);
	});

	return modules;

}

module.exports = new NPMModules();