'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		php: {
			options: {
				hostname: '127.0.0.1',
				port: 5000,
				keepalive: true,
				base: './public'
			},
			watch: {
				options: {
					livereload: 5000
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/stylesheets/style.css': 'public/stylesheets/sass/style.scss'
				}
			}
		},
		jadephp: {
			prettify: {
				options: {
					filename: 'views/ext/layout',
					pretty: true
					
				},
				files: [{
					cwd: 'views',
					src: '*.jade',
					dest: 'public',
					expand: true,
					ext: '.php'
				}]
			}
		},
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: 'public/stylesheets/sass/*.scss',
				tasks: 'sass'
			},
			php: {
				files: '**/*.php'
			},
			jade: {
				files: 'views/**/*.jade',
				tasks: 'jadephp'
			},
			js: {
				files: 'public/javascripts/*.js'
			}
		},
		concurrent: {
			target: {
				tasks: ['php:watch', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-jade-php');

	grunt.registerTask('default', ['concurrent:target']);
};
