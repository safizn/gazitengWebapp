import ownProjectConfig from '../configuration'
import { serviceConfig } from './configuration/apiGateway'
import {
  apiEndpoint,
  // oAuth,
  // openIdConnect,
  staticContent,
  // webappUserInterface,
  webSocket,
} from '@dependency/appscript'
import { memgraphContainer } from '@dependency/deploymentProvisioning'

// initialize services
export const application = async () => {
  console.groupCollapsed('• Run prerequisite containers:')
  memgraphContainer.runDockerContainer() // temporary solution
  console.groupEnd()

  console.groupCollapsed('• Run services:')
  await apiEndpoint.initialize({
    targetProjectConfig: ownProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'apiEndpoint').port,
  })
  // await oAuth.initialize({ targetProjectConfig: ownProjectConfig })
  // await openIdConnect.initialize({ targetProjectConfig: ownProjectConfig })
  await staticContent.initialize({
    targetProjectConfig: ownProjectConfig,
    entrypointKey: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd',
    port: serviceConfig.find(item => item.targetService == 'staticContent').port,
  })
  // await webappUserInterface.initialize({ targetProjectConfig: ownProjectConfig })
  await webSocket.initialize({ targetProjectConfig: ownProjectConfig })
  console.groupEnd()

  console.log('• WebApp up & running !')
}
