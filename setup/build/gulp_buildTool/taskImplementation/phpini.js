'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let path = require("path");
let rsyncTask = require(path.join(config.TaskModulePath, 'rsync.js'));

module.exports = ()=> {
	return rsyncTask( '/tmp/distribution/serverSide/phpConfiguration/', 'php.ini', '/usr/local/etc/php/' );
};