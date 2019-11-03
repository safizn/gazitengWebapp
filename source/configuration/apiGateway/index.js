import filesystem from 'fs'
import path from 'path'

let PROTOCOL = 'http://',
  HOST = 'localhost'

export const serviceConfig = [
  {
    port: 8088,
    targetService: 'oAuth',
  },
  {
    port: 8084,
    targetService: 'openIdConnect',
  },
  {
    port: 8082,
    targetService: 'apiEndpoint',
    url: `${PROTOCOL}api.${HOST}/`,
  },
  {
    port: 8081,
    targetService: 'contentDelivery',
    url: `${PROTOCOL}cdn.${HOST}`,
  },
  {
    port: 8080,
    targetService: 'contentRendering',
  },
]

export const sslProtocol = {
  // expose as encrypted https
  port: 443,
  ssl: {
    key: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.key')),
    cert: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.crt')),
  },
}
