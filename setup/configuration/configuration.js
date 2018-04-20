const projectPath = "/project",
      appDeploymentLifecyclePath = `${projectPath}/application/dependency/appDeploymentLifecycle`

module.exports = {
    projectPath, 
    appDeploymentLifecyclePath,
    databaseVersion: 1,
    GulpPath: `${projectPath}/application/setup/build`, // TODO: is it actually needed. remove if possible.
    SourceCodePath: `${projectPath}/application/source`,
    DestinationPath: `${projectPath}/application/distribution`,
    dockerImageName: 'gaziteng-webapp',
    domain: 'gaziteng.com',
    hostStorageFolderName: 'gaziteng', // remote production folder
    stackName: 'gazitengwebapp',
    entrypoint: {
        build: {
            file: `${appDeploymentLifecyclePath}/entrypoint/build/build.js`,
            argument: {}
        },
        production: {
            file: `${appDeploymentLifecyclePath}/entrypoint/production/deployProduction.js`,
        },
        run: {
            file: `${appDeploymentLifecyclePath}/entrypoint/run/run.js`,
        },
        test: {
            file: `${appDeploymentLifecyclePath}/entrypoint/test/test.js`,
        },
    }
}