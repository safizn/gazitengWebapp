import assert from 'assert'
import http from 'http'
import { assert as chaiAssertion } from 'chai'
import utility from 'util'
import path from 'path'
import filesystem from 'fs'
import { application } from '..'
import ownProjectConfig from '../configuration'
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

suite.only('Application integration test with services:', () => {
  test('', () => {
    console.log('ok')
  })
})

suite('Application integration test with services:', () => {
  setup(async () => await clearGraphData())

  suite('Exposing services through dedicated ports:', () => {
    const url = `http://${ownProjectConfig.runtimeVariable.HOST}:${ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentDelivery').port}`
    test('Should call successfully expose services', async () => {
      await application().catch(error => throw error)

      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/@javascript`, response => resolve(response)))
        assert(responseStream.statusCode == 404, `• Response return non successful statusCode.`)
      }
      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/@javascript/jspm.initialization.js`, response => resolve(response)))
        assert(responseStream.statusCode == 200, `• Response return non successful statusCode.`)
      }
    })

    test('Should call successfully expose services', async () => {
      await application().catch(error => throw error)

      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/asset`, response => resolve(response)))
        assert(responseStream.statusCode == 404, `• Response return non successful statusCode.`)
      }
      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/asset/metadata/manifest.json`, response => resolve(response)))
        assert(responseStream.statusCode == 200, `• Response return non successful statusCode.`)
      }
    })

    test('Should call successfully expose services', async () => {
      await application().catch(error => throw error)

      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/upload`, response => resolve(response)))
        assert(responseStream.statusCode == 404, `• Response return non successful statusCode.`)
      }
      {
        let responseStream = await new Promise((resolve, reject) => http.get(`${url}/upload/Logo.png`, response => resolve(response)))
        assert(responseStream.statusCode == 200, `• Response return non successful statusCode.`)
      }
    })
  })
})
