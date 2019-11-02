import ownProjectConfig from '../configuration'
import { serviceConfig } from './configuration/apiGateway'
// import {
//   apiEndpoint,
//   // oAuth,
//   // openIdConnect,
//   staticContent,
//   // webappUserInterface,
// } from '@dependency/appscript'
import * as serviceRealtimeEndpoint from '@dependency/serviceRealtimeEndpoint'
import * as serviceDynamicContent from '@dependency/serviceDynamicContent'

import { memgraphContainer } from '@dependency/deploymentProvisioning'
// import { getProjectConfig as getClientSideProjectConfig } from '@dependency/gazitengWebapp-clientSide'

// initialize services
export const application = async () => {
  console.groupCollapsed('• Run prerequisite containers:')
  memgraphContainer.runDockerContainer() // temporary solution
  console.groupEnd()

  // const clientSideProjectConfig = getClientSideProjectConfig()

  console.groupCollapsed('• Run services:')

  // await apiEndpoint.initialize({
  //   targetProjectConfig: ownProjectConfig,
  //   port: serviceConfig.find(item => item.targetService == 'apiEndpoint').port,
  // })

  // await oAuth.initialize({ targetProjectConfig: ownProjectConfig })

  // await openIdConnect.initialize({ targetProjectConfig: ownProjectConfig })

  await serviceDynamicContent.initializeContentDelivery({
    targetProjectConfig: ownProjectConfig,
    entrypointKey: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd',
    port: serviceConfig.find(item => item.targetService == 'staticContent').port,
  })

  await serviceDynamicContent.initializeContentRendering({ targetProjectConfig: ownProjectConfig })

  await serviceRealtimeEndpoint.initializeWS({ targetProjectConfig: ownProjectConfig })

  console.groupEnd()

  console.log('• WebApp up & running !')
}
