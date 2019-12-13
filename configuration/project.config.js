const path = require('path')
const { script } = require('./script.config.js')

/* previous serverConfig - TODO: check which configs to use:
{
    port: DEPLOYMENT == 'development' ? '9903' : process.env.PORT || 80,
    PROTOCOL: DEPLOYMENT == 'development' ? 'http://' : 'https://',
    ssl: DEPLOYMENT == 'development' ? true : false,  
    SOCKET_PROTOCOL: DEPLOYMENT == 'development' ? 'ws://' : 'wss://'
}

*/

const ownConfig = {
  runtimeVariable: {
    DEPLOYMENT: process.env.DEPLOYMENT || 'development', // Deployment type
    DISTRIBUTION: process.env.DISTRIBUTION || false,
    HOST: process.env.HOST || 'localhost',
  },
  directory: {
    root: path.normalize(`${__dirname}/..`),
    get source() {
      return path.join(ownConfig.directory.root, './source')
    },
    get test() {
      return path.join(ownConfig.directory.root, './test')
    },
    get script() {
      return path.join(ownConfig.directory.root, './script')
    },
    get distribution() {
      return path.join(ownConfig.directory.root, './distribution')
    },
    get resource() {
      return path.join(ownConfig.directory.root, './resource')
    },
  },
  entrypoint: {
    programmaticAPI: 'app.js',
  },
  get script() {
    return [
      ...script,
      ...[
        { type: 'directory', path: ownConfig.directory.script },
        { type: 'directory', path: path.join(ownConfig.directory.root, 'node_modules') },
      ],
    ]
  },
  build: {
    get compile() {
      return [
        path.relative(ownConfig.directory.root, ownConfig.directory.source),
        path.relative(ownConfig.directory.root, ownConfig.directory.resource),
        path.relative(ownConfig.directory.root, 'configuration'), // TODO: the graph data must be updated in order to include 'configuration' folder.
      ]
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
  production: {
    hostStorageFolderName: 'gaziteng', // remote production folder
    reverseProxy: {
      domain: 'gaziteng.com',
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
  databaseVersion: 1,
}

module.exports = ownConfig
