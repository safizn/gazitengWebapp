'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let mkdirp = require('mkdirp');
let filesystem = require('fs');
let childProcess = require('child_process');
let path = require("path");
let joinPath = require(path.join(config.UtilityModulePath, 'joinPath.js'));
let source = subpath => { return joinPath(config.SourceCodePath, subpath) };
let destination = subpath => { return joinPath(config.DestinationPath, subpath) };

module.exports = async ()=> {
	return new Promise(resolve => {
		// Create directory.
		mkdirp.sync(destination('serverSide/wordpressPlugins_mustUsePlugins/'), function(err) { /* path exists unless there was an error */ });
		resolve();
	}).then(()=>{
		// check if github plugin repo is cloned.
		if (filesystem.existsSync(destination('serverSide/wordpressPlugins_mustUsePlugins/SZN_template_system/.git') )) {
			// pull
			 childProcess.spawnSync('git', ['pull https://github.com/myuseringithub/SZN_template_system.git'], { cwd: destination('serverSide/wordpressPlugins_mustUsePlugins/SZN_template_system/'), shell: true, stdio:[0,1,2] });
		} else { // if repo isn't cloned.
			// clone
			 childProcess.spawnSync('git', ['clone https://github.com/myuseringithub/SZN_template_system.git'], { cwd: destination('serverSide/wordpressPlugins_mustUsePlugins/'), shell: true, stdio:[0,1,2] });
		}
		Promise.resolve();
	}).then(()=>{
		// install composer dependencies.
		childProcess.spawnSync('composer', ['install'], { cwd: destination('serverSide/wordpressPlugins_mustUsePlugins/SZN_template_system/dependencies/services_composer_dependencyManager/'), shell: true, stdio:[0,1,2]  });
		Promise.resolve();
	});

};