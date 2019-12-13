import ownProjectConfig from '../configuration'
import { serviceConfig } from './configuration/apiGateway'
import clientSideProjectConfigList from '@application/gazitengWebapp-clientSide'
// import * as serviceApiEndpoint from '@dependency/serviceApiEndpoint'
// import * as serviceAccessControl from '@dependency/serviceAccessControl'
import { service } from '@dependency/serviceDynamicContent'
// import * as serviceRealtimeEndpoint from '@dependency/serviceRealtimeEndpoint'

// initialize services
export const application = async () => {
  const targetProjectConfig = Object.assign(ownProjectConfig, { clientSideProjectConfigList })

  console.groupCollapsed('• Run services:')

  // await serviceApiEndpoint.initialize({
  //   targetProjectConfig: ownProjectConfig,
  //   port: serviceConfig.find(item => item.targetService == 'apiEndpoint').port,
  // })

  // await serviceAccessControl.oAuth.initialize({ targetProjectConfig })

  // await serviceAccessControl.openIdConnect.initialize({ targetProjectConfig })

  await service.restApi.initializeAssetContentDelivery({
    targetProjectConfig,
    // entrypointKey: 'xxxx-xxxx-xxxx-xxxx',
    port: serviceConfig.find(item => item.targetService == 'contentDelivery').port,
  })

  await service.restApi.initializeRootContentRendering({
    targetProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'contentRendering').port,
  })

  // await serviceRealtimeEndpoint.initializeWS({ targetProjectConfig })

  console.groupEnd()

  console.log('• WebApp up & running ! \n')
}
