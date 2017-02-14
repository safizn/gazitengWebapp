'use strict';

let path = require('path');

const ConfigPath = __dirname;
const GulpPath = '/tmp/build/gulp_buildTool/'
const SourceCodePath = '/tmp/source/';
const DestinationPath = '/app/';
const DistributionCodePath = '/tmp/distribution/';
const TaskModulePath = path.join(GulpPath, 'taskModule/');
const UtilityModulePath = path.join(GulpPath, 'utilityModule/');
const TaskImplementationPath = path.join(GulpPath, 'taskImplementation/');

module.exports = {
    // TODO: create object of constants http://stackoverflow.com/questions/10843572/how-to-create-javascript-constants-as-properties-of-objects-using-const-keyword
    ConfigPath,
    SourceCodePath,
    DestinationPath,
    DistributionCodePath,
    TaskModulePath,
    UtilityModulePath,
    TaskImplementationPath

};