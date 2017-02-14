'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')({ camelize: true });
let childProcess = require('child_process');

module.exports = async ()=> {
    var process = childProcess.execSync(
        'set -ex; \
        chown -R www-data:www-data /app/; \
        find /app/ -type f -exec chown -R www-data:www-data {} \; \
        find /app/ -type f -exec chmod -R 644 {} \; \
        find /app/ -type d -exec chmod -R 755 {} \; \
        usermod -u 1000 www-data;',
        {shell: true, stdio:[0,1,2] }
    );
    return await process;
};