const filesystem = require('fs')
const path = require('path')

module.exports.service = ({ protocol, host }) => [
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
    url: `${protocol}cdn.${host}`,
    ssl: true,
  },
  {
    targetService: 'apiEndpoint',
    port: 8082,
    subdomain: `api`,
    url: `${protocol}api.${host}/`,
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
