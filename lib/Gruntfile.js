module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../main.js']
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$" ],
        esnext: true,
        browserify: true
      },
      files: ['../*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/style.css': '../sass/style.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};