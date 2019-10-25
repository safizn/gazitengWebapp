import ownProjectConfig from '../../configuration'
import {
  apiEndpoint,
  // oAuth,
  // openIdConnect,
  // staticContent,
  // webappUserInterface,
  // webSocket
} from '@dependency/appscript'
import { runDockerContainer } from '@dependency/deploymentScript/script/graphDatabase/memgraphContainer.js'

// initialize services
;(async () => {
  console.groupCollapsed('• Run prerequisite containers:')
  runDockerContainer() // temporary solution
  console.groupEnd()

  console.groupCollapsed('• Run services:')
  await apiEndpoint.initialize({ targetProjectConfig: ownProjectConfig })
  // await oAuth.initialize({ targetProjectConfig: ownProjectConfig })
  // await openIdConnect.initialize({ targetProjectConfig: ownProjectConfig })
  // await staticContent.initialize({ targetProjectConfig: ownProjectConfig, entrypointConditionKey: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd' })
  // await webappUserInterface.initialize({ targetProjectConfig: ownProjectConfig })
  // await webSocket.initialize({ targetProjectConfig: ownProjectConfig })
  console.groupEnd()

  console.log('• WebApp up & running !')
})()
