const path = require('path')
const { script } = require('./script.config.js')
const { service, sslProtocol } = require('./apiGateway')

/* previous serverConfig - TODO: check which configs to use:
{
    port: DEPLOYMENT == 'development' ? '9903' : process.env.PORT || 80,
    PROTOCOL: DEPLOYMENT == 'development' ? 'http://' : 'https://',
    ssl: DEPLOYMENT == 'development' ? true : false,  
    SOCKET_PROTOCOL: DEPLOYMENT == 'development' ? 'ws://' : 'wss://'
}

*/
const ownConfig = {}
module.exports = ownConfig // NOTE: any circular dependency must be handled after exporting this configuration.
Object.assign(ownConfig, {
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
    cli: './clientInterface/subprocessCliAdapter.js',
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
      const { getBabelConfig } = require('@deployment/javascriptTranspilation')
      return getBabelConfig(ownConfig.transpilation.babelConfigKey, { configType: 'json' })
    },
  },
  apiGateway: {
    service,
  },
  production: {
    get containerRoute() {
      return `http://${ownConfig.production.containerStackName}_nodejs:${this.port}`
    },
    hostStorageFolderName: 'gaziteng', // remote production folder
    domain: 'gaziteng.com',
    dockerImageName: 'gaziteng-webapp',
    containerStackName: 'gazitengwebapp',
  },
  databaseVersion: 1,
})

/** Must be positioned after exporting config, to prevent circular dependencies in the transpilation module - as the transpiler checks for the root module's configuration to print the transpiled files in shared temporary folder.
  In case the following modules also require tranpilation.
*/
const clientSideProjectConfigList = require('@service/gazitengWebapp-clientSide')
ownConfig.clientSideProjectConfigList = clientSideProjectConfigList
