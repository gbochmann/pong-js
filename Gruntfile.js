/* global require module */
var sources = ['src/*.es6'];
var files = [{
    expand: true,
    cwd: 'src',
    ext: '-es6.js',
    src: '*.es6',
    dest: 'dist/'
}];

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt, { pattern: ['grunt-*', '@*/grunt-*'] }); // npm install --save-dev load-grunt-tasks


    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify"]
                    ]
                },
                files: files
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: files
            }
        },
        watch: {
            scripts: {
                files: sources,
                tasks: ['browserify'],
                options: {}
            }
        }
    });

    grunt.registerTask("default", ["babel"]);

};