module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'js/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },


    // https://github.com/vkadam/grunt-jsbeautifier
    jsbeautifier: {
      files: ["js/**/*.js"],
      options: {}
    },


    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jsbeautifier','jshint']
    }

  });


  // load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('test', ['jsbeautifier','jshint']);
  grunt.registerTask('default', ['test', 'watch']);
};