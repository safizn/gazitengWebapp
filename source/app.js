import ownProjectConfig from '../configuration'
import { service } from '@dependency/serviceDynamicContent'
// import * as serviceApiEndpoint from '@dependency/serviceApiEndpoint'
// import * as serviceAccessControl from '@dependency/serviceAccessControl'
// import * as serviceRealtimeEndpoint from '@dependency/serviceRealtimeEndpoint'

// initialize services
export const application = async () => {
  // Application & Service messages:
  process.on('service', message => console.log(`☕ Service: ${message.serviceName}, port ${message.port}, status ${message.status}`))
  process.on('application', message => console.log(`✔ WebApp: status ${message.status} \n`))

  // Each service should emit an event/message to listening processes, marking a ready status to receive requests (in case run in a forked process).
  console.groupCollapsed('• Run services:')

  await service.restApi.initializeAssetContentDelivery({
    targetProjectConfig: ownProjectConfig,
    port: ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentDelivery').port,
  })

  await service.restApi.initializeRootContentRendering({
    targetProjectConfig: ownProjectConfig,
    port: ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentRendering').port,
  })

  // await serviceApiEndpoint.initialize({
  //   targetProjectConfig: ownProjectConfig,
  //   port: ownProjectConfig.apiGateway.service.find(item => item.targetService == 'apiEndpoint').port,
  // })

  // await serviceAccessControl.oAuth.initialize({ targetProjectConfig })

  // await serviceAccessControl.openIdConnect.initialize({ targetProjectConfig })

  // await serviceRealtimeEndpoint.initializeWS({ targetProjectConfig })

  console.groupEnd()

  process.emit('application', { status: 'ready' }) // internal message
  // External message - emit ready status when all services are ready to receive requests (in case forked process)
  if (process.send) process.send({ status: 'ready', description: 'All application services ready to receive requests' }) // if process is a forked child process.
}
