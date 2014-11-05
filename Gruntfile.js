module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),		
		uglify: {
			options: {
				mangle: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			compress: {
				files: {
					'dist/app.min.js': ['js/app.js'],
					'dist/directive.min.js': ['js/directive.js'],
					'dist/home.min.js': ['js/home.js'],
					'dist/feed.min.js': ['js/feed.js'],
					'dist/profile.min.js': ['js/profile.js']
				}
			}
		},
		cssmin: {
			add_banner: {
				options: {
					banner: '/* My minified css file */'
				},
				files: {
					'dist/style.min.css': ['css/style.css']
				}
			}
		},
		concat: {
            css: {
                src: ['dist/*.css'],
                dest: 'dist/mybook.min.css'
            },
            js: {
                src: ['dist/*.js'],
                dest: 'dist/mybook.min.js'
            }
        },
		clean: {
			dist: {
				src: ['dist/*.min.js', '!dist/mybook.min.js', 'dist/*.min.css', '!dist/mybook.min.css']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['uglify', 'cssmin', 'concat', 'clean']);
};