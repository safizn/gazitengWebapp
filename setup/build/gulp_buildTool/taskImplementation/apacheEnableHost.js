'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let childProcess = require('child_process');

module.exports = ()=> {
	return childProcess.spawn('a2ensite', ['configurationsLoader.conf'], { shell: true, stdio:[0,1,2] });
};