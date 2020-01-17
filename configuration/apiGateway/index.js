const filesystem = require('fs')
const path = require('path')

let PROTOCOL = 'http://',
  HOST = 'localhost'

module.exports.service = [
  {
    targetService: 'contentRendering',
    port: 8080,
    subdomain: null,
    ssl: true,
  },
  {
    targetService: 'contentDelivery',
    port: 8081,
    subdomain: `cdn`,
    url: `${PROTOCOL}cdn.${HOST}`,
    ssl: true,
  },
  {
    targetService: 'apiEndpoint',
    port: 8082,
    subdomain: `api`,
    url: `${PROTOCOL}api.${HOST}/`,
    ssl: true,
  },
  {
    targetService: 'openIdConnect',
    port: 8084,
    ssl: true,
  },
  {
    targetService: 'oAuth',
    port: 8088,
    ssl: true,
    subdomain: `oauth`,
  },
  {
    subdomain: `rethinkdb`,
    ssl: false,
  },
]

module.exports.sslProtocol = {
  // expose as encrypted https
  port: 443,
  ssl: {
    key: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.key')),
    cert: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.crt')),
  },
}
