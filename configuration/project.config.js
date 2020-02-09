const path = require('path')
const { service, sslProtocol } = require('./apiGateway')

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
    PROTOCOL: process.env.PROTOCOL || 'http://',
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
  apiGateway: {
    get service() {
      return service({ protocol: ownConfig.runtimeVariable.PROTOCOL, host: ownConfig.runtimeVariable.HOST })
    },
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
}
module.exports = ownConfig // NOTE: any circular dependency must be handled after exporting this configuration.

/** Must be positioned after exporting config, to prevent circular dependencies in the transpilation module - as the transpiler checks for the root module's configuration to print the transpiled files in shared temporary folder.
  In case the following modules also require tranpilation.
*/
const clientSideProjectConfigList = require('@service/gazitengWebapp-clientSide')
ownConfig.clientSideProjectConfigList = clientSideProjectConfigList
