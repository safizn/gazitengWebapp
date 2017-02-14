'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let childProcess = require('child_process'); 
let path = require("path");
let joinPath = require(path.join(config.UtilityModulePath, 'joinPath.js'));
let source = subpath => { return joinPath(config.SourceCodePath, subpath) };
let destination = subpath => { return joinPath(config.DestinationPath, subpath) };

module.exports = ()=> {
	// In gulp 4, you can return a child process to signal task completion
	return childProcess.spawn('bower', ['install --allow-root'], { cwd: destination('clientSide/bower_packageManager/'), shell: true, stdio:[0,1,2] });
};