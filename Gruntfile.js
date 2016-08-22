/* global require module */
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    ext: '-es6.js',
                    src: '*.es6',
                    dest: 'dist/'
                }]
            }
        }
    });

    grunt.registerTask("default", ["babel"]);
};