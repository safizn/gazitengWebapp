import assert from 'assert'
import http from 'http'
import { assert as chaiAssertion } from 'chai'
import utility from 'util'
import path from 'path'
import filesystem from 'fs'
import { application } from '..'
import ownProjectConfig from '../configuration'
import { serviceConfig } from '../source/configuration/apiGateway'
const boltProtocolDriver = require('neo4j-driver').v1
import { memgraphContainer } from '@dependency/deploymentProvisioning'

async function clearGraphData() {
  console.groupCollapsed('• Run prerequisite containers:')
  memgraphContainer.runDockerContainer() // temporary solution
  console.groupEnd()
  // Delete all nodes in the in-memory database
  console.log('• Cleared graph database.')
  const url = { protocol: 'bolt', hostname: 'localhost', port: 7687 },
    authentication = { username: 'neo4j', password: 'test' }
  const graphDBDriver = boltProtocolDriver.driver(`${url.protocol}://${url.hostname}:${url.port}`, boltProtocolDriver.auth.basic(authentication.username, authentication.password))
  let session = await graphDBDriver.session()
  let result = await session.run(`match (n) detach delete n`)
  session.close()
}

suite('Application services:', () => {
  setup(async () => await clearGraphData())

  suite('Expose services on ports.', () => {
    test('Should call services', async () => {
      await application().catch(error => throw error)
      await new Promise((resolve, reject) => {
        let urlPath = `/@javascript`
        http.get(`http://${ownProjectConfig.runtimeVariable.HOST}:${serviceConfig.find(item => item.targetService == 'contentDelivery').port}${urlPath}`, response => resolve())
      })
      await new Promise((resolve, reject) => {
        let urlPath = `/asset`
        http.get(`http://${ownProjectConfig.runtimeVariable.HOST}:${serviceConfig.find(item => item.targetService == 'contentDelivery').port}${urlPath}`, response => resolve())
      })
      await new Promise((resolve, reject) => {
        let urlPath = `/upload`
        http.get(`http://${ownProjectConfig.runtimeVariable.HOST}:${serviceConfig.find(item => item.targetService == 'contentDelivery').port}${urlPath}`, response => resolve())
      })

      // await new Promise((resolve, reject) => {
      //   let urlPath = `/@javascript/jspm.initialization.js`
      //   http.get(`http://${ownProjectConfig.runtimeVariable.HOST}:${serviceConfig.find(item => item.targetService == 'contentDelivery').port}${urlPath}`, response => resolve())
      // })
      // chaiAssertion.deepEqual(true, true)
    })
  })
})
