const { execSync, spawn, spawnSync } = require('child_process')
import path from 'path'
import configuration from '../configuration/configuration.json'
const applicationPath = path.join(configuration.projectPath, 'application')
const appDeploymentLifecycle = path.join(configuration.projectPath, 'dependency/appDeploymentLifecycle')
console.log(process.argv)

/*
 * Usage:
 * • ./entrypoint.sh build 
 */
let ymlFile = `${applicationPath}/setup/container/development.dockerCompose.yml`
let serviceName = 'nodejs'
let containerPrefix = 'talebwebapp'
let debug, command, environmentVariable
switch (process.argv[0]) {
    default:
        debug = (process.argv[1] == 'debug' || process.argv[2] == 'debug') ? '--inspect=localhost:9229 --debug-brk' : '';
        let appEntrypointPath = `${applicationPath}/setup/build/`
        command = `node ${debug} ${appEntrypointPath} build`
        environmentVariable = {
            DEPLOYMENT: "development",
            SZN_DEBUG: false,
            hostPath: process.env.hostPath
        }
        spawnSync('docker-compose', [
                `-f ${ymlFile} --project-name ${containerPrefix} run --service-ports --entrypoint '${command}' ${serviceName}`
            ], {
                // cwd: `${applicationPath}`, 
                shell: true, 
                stdio: [0,1,2], 
                env: environmentVariable
            })
    break;
}
