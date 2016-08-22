/* global require module */
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt, { pattern: ['grunt-*', '@*/grunt-*'] }); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        babel: {
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
        },
        watch: {
            scripts: {
                files: ['src/*.es6'],
                tasks: ['babel'],
                options: {}
            }
        }
    });

    grunt.registerTask("default", ["babel"]);

};