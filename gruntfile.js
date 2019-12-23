module.exports = function(grunt) {

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.initConfig({
        'gh-pages': {
          options: {
            base: 'dist'
          },
          src: ['**']
        }
      });

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner : "/*! index.min.js file */\n"
            },
            build: {
                src : ["js/index.js"],
                dest : "dist/js/index.js"
            }
        },

        
        cssmin : {
            target : {
                src : ["css/**/*.css"],
                dest : "dist/css/site.css"
            }
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'index.html',     // 'destination': 'source'
                    'dist/site.webmanifest': 'site.webmanifest',     // 'destination': 'source'
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['images/*'], dest: 'dist', filter: 'isFile'},
                   ],
            },
        },

        watch: {
            sass:{
                files: ['scss/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            html: {
                files: ['index.html'],
                tasks: ['htmlmin']
            }
        },

        sass: {
            dist: {
                options: {                 
                    compass: true,
                },
                files: {
                    'dist/css/custom.css' : 'scss/custom.scss'
                }
            }
        },

      
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');

    // Default task(s).
    grunt.registerTask('default', ['copy','htmlmin','uglify','cssmin','sass','watch']);
    // adding task for gh-pages
    grunt.registerTask ('deploy', ['gh-pages']);


};