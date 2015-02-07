// Karma configuration
// Generated on Fri Sep 19 2014 11:05:59 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],


    // list of files / patterns to load in the browser
    // 本来はfilesでテスト時に読み込むファイルを指定しますが、
    // 今回テストしたいファイルはプリプロセッサでbrowserifyしたファイルになります。
    //そのため、files は空でよくて、代わりにbrowserifyというプロパティのfilesにテストしたいファイルを指定しています。
    files: [
    ],


    // list of files to exclude
    exclude: [
    ],

    // files to browserify
    browserify: {
      debug: true,
      files: [
        'test/**/*.js'
      ],
      transform: [
        'espowerify'
      ]
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '/**/*.browserify': 'browserify'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'Safari', 'IE'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
