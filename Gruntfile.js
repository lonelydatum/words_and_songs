module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),




requirejs: {
            compile: {
                options: {
                    baseUrl: './app/scripts',
                    mainConfigFile: './app/scripts/main.js',
                    // dir: './app/release',
                    out: "./app/build/main-built.js",
                    fileExclusionRegExp: /^\.|bower_components|Gruntfile|\.md|package.json/,
                    // fileExclusionRegExp: "/^bower_components$/",
                      // "jquery",
                      // "pixi",
                      // "TweenMax", "TweenLite", "TimelineMax", "signals", "yt", "_"

                    optimize: 'uglify',
                    name: 'main'
                    // modules: [
                    //     {
                    //         name: 'main'
                    //         // include: ['module'],
                    //         // exclude: ['module']
                    //     }
                    // ]
                }
            }
        },
  });

  // Load the plugin that provides the "uglify" task.

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};
