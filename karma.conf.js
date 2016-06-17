module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
    'unit-tests/rectangle.spec.js'
    ]
  });
};