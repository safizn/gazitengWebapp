const path = require('path')
const { script } = require('./script.config.js')

const clientSide = { folderName: 'clientSide' },
  serverSide = { folderName: `` }
const distribution = {
  serverSide: { folderName: serverSide.folderName },
}

const ownConfiguration = {
  directory: {
    root: path.normalize(`${__dirname}/..`),
    get deploymentScript() {
      return path.dirname(require.resolve(`@dependency/deploymentScript/package.json`))
    },
    get source() {
      return path.join(ownConfiguration.directory.root, './source')
    },
    get distribution() {
      return path.join(ownConfiguration.directory.root, './distribution')
    },
    get clientSide() {
      return path.join(ownConfiguration.directory.source, './clientSide')
    },
    get serverSide() {
      return path.join(ownConfiguration.directory.source, './serverSide')
    },
  },
  script,
  distribution: {
    clientSide: {
      get native() {
        return path.join(ownConfiguration.directory.distribution, 'nativeClientSide')
      },
      get polyfill() {
        return path.join(ownConfiguration.directory.distribution, 'polyfillClientSide')
      },
    },
    get serverSide() {
      return path.join(ownConfiguration.directory.distribution, 'serverSide')
    },
  },
  transpilation: {
    babelConfigKey: 'serverRuntime.BabelConfig.js',
    get babelConfig() {
      const { getBabelConfig } = require('@dependency/javascriptTranspilation')
      return getBabelConfig(ownConfiguration.transpilation.babelConfigKey, { configType: 'json' })
    },
  },
  container: {
    projectPath: '/project',
    dockerImageName: 'gaziteng-webapp',
    stackName: 'gazitengwebapp',
    get SourceCodePath() {
      return `${ownConfiguration.container.projectPath}/application/source`
    },
    get DestinationPath() {
      return `${ownConfiguration.container.projectPath}/application/distribution`
    },
  },
  reverseProxy: {
    domain: 'gaziteng.com',
  },
  production: {
    hostStorageFolderName: 'gaziteng', // remote production folder
  },
  databaseVersion: 1,
}

module.exports = ownConfiguration
