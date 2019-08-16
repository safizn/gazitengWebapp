const path = require('path')
const { script } = require('./script.config.js')

const ownConfig = {
  directory: {
    root: path.normalize(`${__dirname}/..`),
    get deploymentScript() {
      return path.dirname(require.resolve(`@dependency/deploymentScript/package.json`))
    },
    get source() {
      return path.join(ownConfig.directory.root, './source')
    },
    get distribution() {
      return path.join(ownConfig.directory.root, './distribution')
    },
    get clientSide() {
      return path.join(ownConfig.directory.source, './clientSide')
    },
    get serverSide() {
      return path.join(ownConfig.directory.source, './serverSide')
    },
    get resource() {
      return path.join(ownConfig.directory.root, './resource')
    },
  },
  get script() {
    return [...script, ...[{ type: 'directory', path: ownConfig.directory.script }]]
  },
  entrypoint: {
    get programmaticAPI() {
      return path.relative(ownConfig.directory.source, ownConfig.directory.serverSide)
    },
  },
  distribution: {
    clientSide: {
      get native() {
        return path.join(ownConfig.directory.distribution, 'nativeClientSide')
      },
      get polyfill() {
        return path.join(ownConfig.directory.distribution, 'polyfillClientSide')
      },
    },
    get serverSide() {
      return path.join(ownConfig.directory.distribution, 'serverSide')
    },
  },
  build: {
    get compile() {
      return [path.relative(ownConfig.directory.root, ownConfig.directory.resource)]
    },
    repositoryURL: 'https://github.com/AppScriptIO/gazitengWebapp',
  },
  transpilation: {
    babelConfigKey: 'serverRuntime.BabelConfig.js',
    get babelConfig() {
      const { getBabelConfig } = require('@dependency/javascriptTranspilation')
      return getBabelConfig(ownConfig.transpilation.babelConfigKey, { configType: 'json' })
    },
  },
  container: {
    projectPath: '/project',
    dockerImageName: 'gaziteng-webapp',
    stackName: 'gazitengwebapp',
    get SourceCodePath() {
      return `${ownConfig.container.projectPath}/application/source`
    },
    get DestinationPath() {
      return `${ownConfig.container.projectPath}/application/distribution`
    },
  },
  production: {
    hostStorageFolderName: 'gaziteng', // remote production folder
    reverseProxy: {
      domain: 'gaziteng.com',
    },
  },
  databaseVersion: 1,
}

module.exports = ownConfig
