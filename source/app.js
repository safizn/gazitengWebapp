import ownProjectConfig from '../configuration'
import { serviceConfig } from './configuration/apiGateway'
import clientSideProjectConfigList from '@application/gazitengWebapp-clientSide'
import * as serviceRealtimeEndpoint from '@dependency/serviceRealtimeEndpoint'
import * as serviceDynamicContent from '@dependency/serviceDynamicContent'
import * as serviceAccessControl from '@dependency/serviceAccessControl'
import * as serviceApiEndpoint from '@dependency/serviceApiEndpoint'

// initialize services
export const application = async () => {
  const targetProjectConfig = Object.assign(ownProjectConfig, { clientSideProjectConfigList })

  console.groupCollapsed('• Run services:')

  await serviceApiEndpoint.initialize({
    targetProjectConfig: ownProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'apiEndpoint').port,
  })

  // await serviceAccessControl.oAuth.initialize({ targetProjectConfig })

  // await serviceAccessControl.openIdConnect.initialize({ targetProjectConfig })

  await serviceDynamicContent.initializeAssetContentDelivery({
    targetProjectConfig,
    entrypointKey: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd',
    port: serviceConfig.find(item => item.targetService == 'contentDelivery').port,
  })

  await serviceDynamicContent.initializeRootContentRendering({
    targetProjectConfig,
    port: serviceConfig.find(item => item.targetService == 'contentRendering').port,
  })

  await serviceRealtimeEndpoint.initializeWS({ targetProjectConfig })

  console.groupEnd()

  console.log('• WebApp up & running !')
}
