'use strict';

let config = require('../config.js');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let path = require("path");
let rsyncTask = require(path.join(config.TaskModulePath, 'rsync.js'));

module.exports = ()=> { 
    let vHosts = rsyncTask( '/tmp/distribution/serverSide/apacheServer/virtualHostsConfigurations', '/', '/etc/apache2/sites-available/' ); 
    let apacheConf = rsyncTask( '/tmp/distribution/serverSide/apacheServer/', 'apache2.conf', '/etc/apache2/' ); 
    return Promise.all([vHosts, apacheConf]);
};
