'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let childProcess = require('child_process'); 
let path = require("path");
let joinPath = require(path.join(config.UtilityModulePath, 'joinPath.js'));
let source = subpath => { return joinPath(config.SourceCodePath, subpath) };
let destination = subpath => { return joinPath(config.DestinationPath, subpath) };

module.exports = (nodejsVersion)=> {
	return async ()=> {
		// // switch to supported node version
		// childProcess.spawn('n', ['stable'], { shell: true, stdio:[0,1,2] });

		// // In gulp 4, you can return a child process to signal task completion
		// childProcess.spawn('jspm', ['install'], { cwd: '/app/clientSide/jspm_packages_modules/', shell: true, stdio:[0,1,2] });
		// return childProcess.spawn('n', ['v8.0.0-nightly20170126a67a04d765'], { shell: true, stdio:[0,1,2] });

		// switch to nodejs stable supported version by jspm and then execute composer
		var process = childProcess.execSync('n stable; jspm install; n ' + nodejsVersion, { cwd: destination('clientSide/jspm_packages_modules/'), shell: true, stdio:[0,1,2] });
		return await process;
	}
}