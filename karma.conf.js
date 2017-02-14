/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');

var webpack = require('karma-webpack');
var webpackConfig = require('./build/dev.config');

var files = process.env.npm_config_single_file
  ? { pattern: process.env.npm_config_single_file, watch: false }
  : null;

console.log('files', files);

webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
  { test: /\.json$/, loader: 'json-loader' }
]);

webpackConfig.externals = Object.assign({}, webpackConfig.externals, {
  cheerio: 'window',
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
});

module.exports = function(config) {
  const cfg = {
    basePath: '',
    frameworks: [ 'mocha', 'sinon-chai' ],
    files: [ files || 'src/**/*-test.js' ],
    // add webpack as preprocessor
    preprocessors: {
      'src/**/*.js': [ 'webpack' ],
      'test/**/*.js': [ 'webpack' ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: 'errors-only' },
    plugins: [
      webpack,
      'karma-mocha',
      'karma-sinon-chai',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/coverage',
      reporters: [ { type: 'html', subdir: 'report' }, { type: 'text' } ]
    },
    client: { chai: { includeStack: true } },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [ 'Chrome' ],
    singleRun: false
  };

  config.set(cfg);
};
