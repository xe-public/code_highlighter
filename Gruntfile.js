/* global module:false */
module.exports = function(grunt) {
	"use strict";

	grunt.file.defaultEncoding = 'utf8';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: [
			'Gruntfile.js',
			'tpl/js/*.js',
			'!**/*.min.js'
			],
			options : {
				globalstrict: false,
				undef : false,
				eqeqeq: false,
				browser : true,
				globals: {
					"jQuery" : true,
					"console" : true,
					"window" : true
				}
			}
		},
		phplint: {
			options: {
				phpArgs: {
					"-l": null
				}
			},
			all: ["**/*.php", '!node_modules/**']
		}
	});

	grunt.loadNpmTasks('grunt-phplint');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'phplint']);
};
