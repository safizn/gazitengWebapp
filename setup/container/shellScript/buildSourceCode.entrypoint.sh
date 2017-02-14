#!/bin/bash
set -ex; 
echo "Deploying as ${DEPLOYMENT}";

# ⭐ install dependencies / node modules (from packages.json) in working directory "/tmp/build/gulp_buildTool/" & update to latest versions
npm install; npm update; 
gulp -v;

# ⭐ Gulp - run bulid tasks
node --harmony `which gulp` build

# ⌚ Gulp watch
if [ "$DEPLOYMENT" = "development" ]; then
    node --harmony `which gulp` watch:source
fi

# ⭐ call docker-compose command after entrypoint as they are passed as arguments when entrypoint is set.
exec "$@"
