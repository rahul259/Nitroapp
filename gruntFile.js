module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        
         /* concat: {
              dist: {
                src: ['app/sass/main.scss'],
                dest: 'app/master.scss',
              }
            },*/
         wiredep: {
          task: {
            src: ['app/index.html']
          }
        },
		sass: {
			dist: {
				files: {
					'app/style.css' : 'app/sass/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
            files: ['bower_components/*'],
            tasks: ['wiredep']
		},
        connect: {
            server: {
              options: {
                port: 1337,
                hostname: 'localhost',
                base:'app',
				livereload: true
              }
            }
        }
	});

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default',['wiredep','connect:server','sass','watch']);
}