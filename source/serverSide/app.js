import ownProjectConfig from '../../configuration'
import { webappUserInterface } from '@dependency/appscript'

// initialize services
;(async () => {
  //TODO: load graph data and deal with NodeReferences

  console.groupCollapsed('• Run services:')
  await webappUserInterface.initialize({ targetProjectConfig: ownProjectConfig })
  // await oAuthInitializePortServer()()
  // await openIdConnectInitializePortServer()()
  // await staticContentInitializePortServer({ entrypointConditionKey: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd' })()
  // await apiInitializePortServer()()
  // await websocketInitializePortServer()()
  console.groupEnd()

  console.log('• WebApp up & running !')
})()
