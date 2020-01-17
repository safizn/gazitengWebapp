import ownProjectConfig from '../configuration'
import clientSideProjectConfigList from '@application/gazitengWebapp-clientSide'
import { service } from '@dependency/serviceDynamicContent'
import { serviceConfig } from './configuration/apiGateway'
// import * as serviceApiEndpoint from '@dependency/serviceApiEndpoint'
// import * as serviceAccessControl from '@dependency/serviceAccessControl'
// import * as serviceRealtimeEndpoint from '@dependency/serviceRealtimeEndpoint'

// initialize services
export const application = async () => {
  const targetProjectConfig = Object.assign(ownProjectConfig, { clientSideProjectConfigList })

  console.groupCollapsed('• Run services:')

  await service.restApi.initializeAssetContentDelivery({
    targetProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'contentDelivery').port,
  })

  await service.restApi.initializeRootContentRendering({
    targetProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'contentRendering').port,
  })

  // await serviceApiEndpoint.initialize({
  //   targetProjectConfig: ownProjectConfig,
  //   port: serviceConfig.find(item => item.targetService == 'apiEndpoint').port,
  // })

  // await serviceAccessControl.oAuth.initialize({ targetProjectConfig })

  // await serviceAccessControl.openIdConnect.initialize({ targetProjectConfig })

  // await serviceRealtimeEndpoint.initializeWS({ targetProjectConfig })

  console.groupEnd()

  console.log('• WebApp up & running ! \n')
}
