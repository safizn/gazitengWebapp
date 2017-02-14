'use strict'; // Strict enforces specific conditions and imported scripts may have problems.
// 😄 This file is used to define Gulp tasks with source path and destination path. While gulp_includeNodeModules.js is used to save the functions for the build.

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let path = require("path");
let browserSync = require('browser-sync');
let merge = require('merge-stream'); // A method to dynamically add more sources to the stream.
let filesystem = require('fs');
// configurations:
let config = require('./config.js');

// Task & Utility Modules:
let include = (file)=> { eval(filesystem.readFileSync(file) + '') }; // Execute file code as if written locally.
let joinPath = require(path.join(config.UtilityModulePath, 'joinPath.js'));
let source = subpath => { return joinPath(config.SourceCodePath, subpath) };
let destination = subpath => { return joinPath(config.DestinationPath, subpath) };
let rsyncTask = require(path.join(config.TaskModulePath, 'rsync.js'));

// ⌚ Gulp watch settings 
// Fix high CPU usage for mounted filesystem in docker. And allow legacy file changes checking using flag 'usePolling' for chokidar.
// IMPORTANT: should maybe increase fs limit for number files that can be watched https://github.com/gulpjs/gulp/issues/217 https://discourse.roots.io/t/gulp-watch-error-on-ubuntu-14-04-solved/3453/6
const INTERVAL = 10000;
const usePolling = true;

// Deployment container - tasks responsible for builds that happen through temporary container (from one volume to another).
include('taskThroughContainer.js');

// Environment container (production/development) - tasks run changing internals of container. 
include('taskInsideContainer.js');