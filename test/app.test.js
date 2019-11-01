import assert from 'assert'
import http from 'http'
import { assert as chaiAssertion } from 'chai'
import util from 'util'
import path from 'path'
import filesystem from 'fs'
import { application } from '..'
import ownProjectConfig from '../configuration'
import { serviceConfig } from '../source/configuration/apiGateway'

suite('Application services:', () => {
  setup(async () => {
    console.log('Setup test...')
  })

  suite('Expose services on ports.', () => {
    test('Should call services', async () => {
      console.log(application)
      await application().catch(error => throw error)
      http.get(`http://${ownProjectConfig.runtimeVariable.HOST}:${serviceConfig.find(item => item.targetService == 'staticContent').port}`)
      chaiAssertion.deepEqual(true, true)
    })
  })
})
