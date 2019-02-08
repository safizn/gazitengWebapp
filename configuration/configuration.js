const path = require('path')
const   projectPath = "/project",
        resolvedModule = {
            deploymentScript = `${projectPath}/application/dependency/deploymentScript`
        }
      
module.exports = {
    directory: {
        root: path.normalize(`${__dirname}/..`),
        projectPath
    },
    deploymentScriptPath: resolvedModule.deploymentScript,
    databaseVersion: 1,
    GulpPath: `${projectPath}/application/setup/build`, // TODO: is it actually needed. remove if possible.
    SourceCodePath: `${projectPath}/application/source`,
    DestinationPath: `${projectPath}/application/distribution`,
    dockerImageName: 'gaziteng-webapp',
    domain: 'gaziteng.com',
    hostStorageFolderName: 'gaziteng', // remote production folder
    stackName: 'gazitengwebapp',
    script: [
        {
            key: 'build',
            file: `${resolvedModule.deploymentScript}/entrypoint/build/build.js`,
            argument: {}
        },
        {
            key: 'production',
            file: `${resolvedModule.deploymentScript}/entrypoint/production/deployProduction.js`,
        },
        {
            key: 'run',
            file: `${resolvedModule.deploymentScript}/entrypoint/run/run.js`,
        },
        {
            key: 'test',
            file: `${resolvedModule.deploymentScript}/entrypoint/test/test.js`,
        },
    ]
}