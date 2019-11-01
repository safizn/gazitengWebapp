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
    targetService: 'staticContent',
    url: `${PROTOCOL}cdn.${HOST}`,
  },
  {
    // reverse proxy http
    port: 80,
    targetService: 'webappUserInterface',
  },
  {
    // expose as encrypted https
    port: 443,
    ssl: {
      key: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.key')),
      cert: filesystem.readFileSync(path.join(__dirname, './sampleSSL/server.crt')),
    },
    targetService: 'webappUserInterface',
    callback: () => {
      if (serviceConfig.ssl)
        https
          .createServer({ key: serviceConfig.ssl.key, cert: serviceConfig.ssl.cert }, serverKoa.callback())
          .on('connection', socket => socket.setTimeout(120))
          .listen(443, () => console.log(`☕%c ${serviceConfig.targetService} listening on port 443`, consoleLogStyle.green))
    },
  },
]
