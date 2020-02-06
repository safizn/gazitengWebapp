import assert from 'assert'
import http from 'http'
import { assert as chaiAssertion } from 'chai'
import path from 'path'
import filesystem from 'fs'
import loadtest from 'loadtest'
import { application } from '..'
import ownProjectConfig from '../configuration'
import { container } from '@deployment/deploymentScript'
// parse additional passed parameters for tests (as Mocha.run doesn't support passing parameters to test files)
let testConfig = global.additionalParameter ? JSON.parse(global.additionalParameter) : { memgraph: { host: 'localhost' || 'memgraph' } }

suiteSetup(async () => {
  await container.memgraph.clearGraphData({ memgraph: testConfig.memgraph })
  let applicationInfo = await application({}, { memgraph: testConfig.memgraph }).catch(error => throw error)
  suiteTeardown(function(done) {
    console.log('• Closing used server ports:')
    let promiseArray = []
    for (let service of applicationInfo.service) promiseArray.push(service.close())
    Promise.all(promiseArray).then(() => done())
  })
})

suite('Application integration test with services:', () => {
  suite('Exposing services through dedicated ports:', () => {
    // content Delivery
    {
      const url = `http://${ownProjectConfig.runtimeVariable.HOST}:${ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentDelivery').port}`
      test('Should call successfully expose services', async () => {
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
        {
          let responseStream = await new Promise((resolve, reject) => http.get(`${url}/upload`, response => resolve(response)))
          assert(responseStream.statusCode == 404, `• Response return non successful statusCode.`)
        }
        {
          let responseStream = await new Promise((resolve, reject) => http.get(`${url}/upload/Logo.png`, response => resolve(response)))
          assert(responseStream.statusCode == 200, `• Response return non successful statusCode.`)
        }
      })
    }

    // content Rendering
    {
      const url = `http://${ownProjectConfig.runtimeVariable.HOST}:${ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentRendering').port}`
      test('Should call successfully expose services', async () => {
        {
          let responseStream = await new Promise((resolve, reject) => http.get(`${url}/`, response => resolve(response)))
          assert(responseStream.statusCode == 200, `• Response return non successful statusCode.`)
        }
        {
          let responseStream = await new Promise((resolve, reject) => http.get(`${url}/someOtherRoute`, response => resolve(response)))
          assert(responseStream.statusCode == 404, `• Response return non successful statusCode.`)
        }
      })
    }
  })
})

// https://medium.com/@rishikesh.dhokare/performance-testing-for-your-nodejs-api-20471cd045e0
suite('Performance measure:', () => {
  const noRequestPerHour = 10000, // goal: 100,000
    avgRequestTime = 4000 // goal: 1000

  suite('Application with integrated services:', () => {
    const url = `http://${ownProjectConfig.runtimeVariable.HOST}:${ownProjectConfig.apiGateway.service.find(item => item.targetService == 'contentRendering').port}`
    test('performance testing /heaving-ping', function(done) {
      let gLatency
      this.timeout(1000 * 60)

      let operation = loadtest.loadTest(
        {
          url,
          maxRequests: 20, // 100
          maxSeconds: 30,
          concurrency: 25,
          statusCallback: function(error, result, latency) {
            gLatency = latency
            // console.log('Current latency %j, result %j, error %j', latency, result, error)
            console.log(`#${result.requestIndex} - Request elapsed milliseconds: `, result.requestElapsed)
            // console.log('Request loadtest() instance index: ', result.instanceIndex)
          },
        },
        error => {
          // timeout to finish any request and console.log after active requests
          setTimeout(() => {
            if (error) console.error('Got an error: %s', error)
            else if (operation.running == false) {
              console.info('\n==============================\n')
              console.info('Target measures to achieve:')
              console.info('Requests per hour: ' + noRequestPerHour)
              console.info('Avg request time(Millis): ' + avgRequestTime)
              console.info('\n==============================\n')
              console.info('Total Requests :', gLatency.totalRequests)
              console.info('Total Failures :', gLatency.totalErrors)
              console.info('Requests/Second :', gLatency.rps)
              console.info('Requests/Hour :', gLatency.rps * 3600)
              console.info('Avg Request Time:', gLatency.meanLatencyMs)
              console.info('Min Request Time:', gLatency.minLatencyMs)
              console.info('Max Request Time:', gLatency.maxLatencyMs)
              console.info('Percentiles :', gLatency.percentiles)
              console.info('\n===============================\n')
              assert(gLatency.totalErrors == 0, `• No errors should be thrown.`)
              assert(gLatency.rps * 3600 > noRequestPerHour, `• Calculated request per hour (${gLatency.rps * 3600}) must be greater than ${noRequestPerHour}`)
              assert(gLatency.meanLatencyMs < avgRequestTime, `• Calculated average request time (${gLatency.meanLatencyMs}) must be under ${avgRequestTime}`)
              console.log('✔ Tests run successfully')

              done()
            }
          }, 300)
        },
      )
    })
  })
})
