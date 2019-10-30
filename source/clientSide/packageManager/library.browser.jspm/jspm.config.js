"use strict";SystemJS.config({
  paths: {
    'npm:': '@package-jspm/npm/',
    'github:': '@package-jspm/github/',
    'bower:': '@package-jspm/bower/',
    'app/': '' },

  devConfig: {
    map: {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21' } },


  transpiler: 'plugin-babel',
  packages: {
    app: {
      main: 'app.js',
      meta: {
        '*.js': {
          loader: 'plugin-babel' } } } },




  map: {
    'justinfagnani/mixwith.js': 'github:justinfagnani/mixwith.js@master' } });



SystemJS.config({
  packageConfigPaths: ['npm:@*/*.json', 'npm:*.json', 'github:*/*.json'],
  map: {
    assert: 'npm:jspm-nodelibs-assert@0.2.1',
    buffer: 'npm:jspm-nodelibs-buffer@0.2.3',
    child_process: 'npm:jspm-nodelibs-child_process@0.2.1',
    constants: 'npm:jspm-nodelibs-constants@0.2.1',
    crypto: 'npm:jspm-nodelibs-crypto@0.2.1',
    'engine.io-client': 'npm:engine.io-client@3.1.1',
    events: 'npm:jspm-nodelibs-events@0.2.2',
    fs: 'npm:jspm-nodelibs-fs@0.2.1',
    http: 'npm:jspm-nodelibs-http@0.2.0',
    https: 'npm:jspm-nodelibs-https@0.2.2',
    css: 'github:systemjs/plugin-css@0.1.32',
    html: 'github:Hypercubed/systemjs-plugin-html@0.0.8',
    json: 'github:systemjs/plugin-json@0.3.0',
    os: 'npm:jspm-nodelibs-os@0.2.2',
    path: 'npm:jspm-nodelibs-path@0.2.3',
    process: 'npm:jspm-nodelibs-process@0.2.1',
    stream: 'npm:jspm-nodelibs-stream@0.2.1',
    string_decoder: 'npm:jspm-nodelibs-string_decoder@0.2.1',
    underscore: 'npm:underscore@1.8.3',
    url: 'npm:jspm-nodelibs-url@0.2.1',
    util: 'npm:jspm-nodelibs-util@0.2.2',
    vm: 'npm:jspm-nodelibs-vm@0.2.1',
    zlib: 'npm:jspm-nodelibs-zlib@0.2.3' },

  packages: {
    'github:Hypercubed/systemjs-plugin-html@0.0.8': {
      map: {
        webcomponentsjs: 'github:webcomponents/webcomponentsjs@0.7.24' } },


    'npm:engine.io-client@3.1.1': {
      map: {
        'component-inherit': 'npm:component-inherit@0.0.3',
        'component-emitter': 'npm:component-emitter@1.2.1',
        parseuri: 'npm:parseuri@0.0.5',
        parseqs: 'npm:parseqs@0.0.5',
        yeast: 'npm:yeast@0.1.2',
        'has-cors': 'npm:has-cors@1.1.0',
        indexof: 'npm:indexof@0.0.1',
        'engine.io-parser': 'npm:engine.io-parser@2.1.1',
        'xmlhttprequest-ssl': 'npm:xmlhttprequest-ssl@1.5.3',
        parsejson: 'npm:parsejson@0.0.3',
        ws: 'npm:ws@2.3.1',
        debug: 'npm:debug@2.6.8',
        'node-ws': 'npm:ws@2.3.1',
        'node-xmlhttprequest-ssl': 'npm:xmlhttprequest-ssl@1.5.3' } },


    'npm:parseuri@0.0.5': {
      map: {
        'better-assert': 'npm:better-assert@1.0.2' } },


    'npm:parseqs@0.0.5': {
      map: {
        'better-assert': 'npm:better-assert@1.0.2' } },


    'npm:parsejson@0.0.3': {
      map: {
        'better-assert': 'npm:better-assert@1.0.2' } },


    'npm:engine.io-parser@2.1.1': {
      map: {
        'arraybuffer.slice': 'npm:arraybuffer.slice@0.0.6',
        'base64-arraybuffer': 'npm:base64-arraybuffer@0.1.5',
        blob: 'npm:blob@0.0.4',
        after: 'npm:after@0.8.2',
        'has-binary2': 'npm:has-binary2@1.0.2' } },


    'npm:debug@2.6.8': {
      map: {
        ms: 'npm:ms@2.0.0' } },


    'npm:ws@2.3.1': {
      map: {
        ultron: 'npm:ultron@1.1.0',
        'safe-buffer': 'npm:safe-buffer@5.0.1' } },


    'npm:better-assert@1.0.2': {
      map: {
        callsite: 'npm:callsite@1.0.0' } },


    'npm:has-binary2@1.0.2': {
      map: {
        isarray: 'npm:isarray@2.0.1' } },


    'npm:jspm-nodelibs-url@0.2.1': {
      map: {
        url: 'npm:url@0.11.0' } },


    'npm:jspm-nodelibs-http@0.2.0': {
      map: {
        'http-browserify': 'npm:stream-http@2.7.2' } },


    'npm:jspm-nodelibs-buffer@0.2.3': {
      map: {
        buffer: 'npm:buffer@5.0.7' } },


    'npm:url@0.11.0': {
      map: {
        querystring: 'npm:querystring@0.2.0',
        punycode: 'npm:punycode@1.3.2' } },


    'npm:stream-http@2.7.2': {
      map: {
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'readable-stream': 'npm:readable-stream@2.3.3',
        xtend: 'npm:xtend@4.0.1',
        inherits: 'npm:inherits@2.0.3',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1' } },


    'npm:readable-stream@2.3.3': {
      map: {
        isarray: 'npm:isarray@1.0.0',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        inherits: 'npm:inherits@2.0.3',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        string_decoder: 'npm:string_decoder@1.0.3',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7' } },


    'npm:buffer@5.0.7': {
      map: {
        'base64-js': 'npm:base64-js@1.2.1',
        ieee754: 'npm:ieee754@1.1.8' } },


    'npm:jspm-nodelibs-crypto@0.2.1': {
      map: {
        'crypto-browserify': 'npm:crypto-browserify@3.11.1' } },


    'npm:crypto-browserify@3.11.1': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hash': 'npm:create-hash@1.1.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        randombytes: 'npm:randombytes@2.0.5',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        pbkdf2: 'npm:pbkdf2@3.0.13',
        'browserify-sign': 'npm:browserify-sign@4.0.4' } },


    'npm:jspm-nodelibs-zlib@0.2.3': {
      map: {
        'browserify-zlib': 'npm:browserify-zlib@0.1.4' } },


    'npm:browserify-zlib@0.1.4': {
      map: {
        'readable-stream': 'npm:readable-stream@2.3.3',
        pako: 'npm:pako@0.2.9' } },


    'npm:create-hash@1.1.3': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        ripemd160: 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8' } },


    'npm:public-encrypt@4.0.0': {
      map: {
        'create-hash': 'npm:create-hash@1.1.3',
        randombytes: 'npm:randombytes@2.0.5',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'bn.js': 'npm:bn.js@4.11.8' } },


    'npm:randombytes@2.0.5': {
      map: {
        'safe-buffer': 'npm:safe-buffer@5.1.1' } },


    'npm:create-hmac@1.1.6': {
      map: {
        'create-hash': 'npm:create-hash@1.1.3',
        inherits: 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        ripemd160: 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8' } },


    'npm:diffie-hellman@5.0.2': {
      map: {
        randombytes: 'npm:randombytes@2.0.5',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.8' } },


    'npm:browserify-sign@4.0.4': {
      map: {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        inherits: 'npm:inherits@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        elliptic: 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8' } },


    'npm:pbkdf2@3.0.13': {
      map: {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        ripemd160: 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8' } },


    'npm:string_decoder@1.0.3': {
      map: {
        'safe-buffer': 'npm:safe-buffer@5.1.1' } },


    'npm:browserify-cipher@1.0.0': {
      map: {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        evp_bytestokey: 'npm:evp_bytestokey@1.0.2',
        'browserify-des': 'npm:browserify-des@1.0.0' } },


    'npm:create-ecdh@4.0.0': {
      map: {
        elliptic: 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.8' } },


    'npm:cipher-base@1.0.4': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1' } },


    'npm:ripemd160@2.0.1': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2' } },


    'npm:sha.js@2.4.8': {
      map: {
        inherits: 'npm:inherits@2.0.3' } },


    'npm:browserify-aes@1.0.6': {
      map: {
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.1.3',
        evp_bytestokey: 'npm:evp_bytestokey@1.0.2',
        inherits: 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3' } },


    'npm:evp_bytestokey@1.0.2': {
      map: {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4' } },


    'npm:browserify-rsa@4.0.1': {
      map: {
        randombytes: 'npm:randombytes@2.0.5',
        'bn.js': 'npm:bn.js@4.11.8' } },


    'npm:parse-asn1@5.1.0': {
      map: {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.3',
        pbkdf2: 'npm:pbkdf2@3.0.13',
        evp_bytestokey: 'npm:evp_bytestokey@1.0.2',
        'asn1.js': 'npm:asn1.js@4.9.1' } },


    'npm:miller-rabin@4.0.0': {
      map: {
        'bn.js': 'npm:bn.js@4.11.8',
        brorand: 'npm:brorand@1.1.0' } },


    'npm:browserify-des@1.0.0': {
      map: {
        'cipher-base': 'npm:cipher-base@1.0.4',
        inherits: 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0' } },


    'npm:elliptic@6.4.0': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        brorand: 'npm:brorand@1.1.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'hash.js': 'npm:hash.js@1.1.3' } },


    'npm:md5.js@1.3.4': {
      map: {
        'hash-base': 'npm:hash-base@3.0.4',
        inherits: 'npm:inherits@2.0.3' } },


    'npm:hash-base@2.0.2': {
      map: {
        inherits: 'npm:inherits@2.0.3' } },


    'npm:hmac-drbg@1.0.1': {
      map: {
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1' } },


    'npm:des.js@1.0.0': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0' } },


    'npm:hash-base@3.0.4': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1' } },


    'npm:hash.js@1.1.3': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0' } },


    'npm:asn1.js@4.9.1': {
      map: {
        'bn.js': 'npm:bn.js@4.11.8',
        inherits: 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0' } },


    'npm:jspm-nodelibs-os@0.2.2': {
      map: {
        'os-browserify': 'npm:os-browserify@0.3.0' } },


    'npm:jspm-nodelibs-string_decoder@0.2.1': {
      map: {
        string_decoder: 'npm:string_decoder@0.10.31' } },


    'npm:jspm-nodelibs-stream@0.2.1': {
      map: {
        'stream-browserify': 'npm:stream-browserify@2.0.1' } },


    'npm:stream-browserify@2.0.1': {
      map: {
        inherits: 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.3' } } } });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jbGllbnRTaWRlL3BhY2thZ2VNYW5hZ2VyL2xpYnJhcnkuYnJvd3Nlci5qc3BtL2pzcG0uY29uZmlnLmpzIl0sIm5hbWVzIjpbIlN5c3RlbUpTIiwiY29uZmlnIiwicGF0aHMiLCJkZXZDb25maWciLCJtYXAiLCJ0cmFuc3BpbGVyIiwicGFja2FnZXMiLCJhcHAiLCJtYWluIiwibWV0YSIsImxvYWRlciIsInBhY2thZ2VDb25maWdQYXRocyIsImFzc2VydCIsImJ1ZmZlciIsImNoaWxkX3Byb2Nlc3MiLCJjb25zdGFudHMiLCJjcnlwdG8iLCJldmVudHMiLCJmcyIsImh0dHAiLCJodHRwcyIsImNzcyIsImh0bWwiLCJqc29uIiwib3MiLCJwYXRoIiwicHJvY2VzcyIsInN0cmVhbSIsInN0cmluZ19kZWNvZGVyIiwidW5kZXJzY29yZSIsInVybCIsInV0aWwiLCJ2bSIsInpsaWIiLCJ3ZWJjb21wb25lbnRzanMiLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJ5ZWFzdCIsImluZGV4b2YiLCJwYXJzZWpzb24iLCJ3cyIsImRlYnVnIiwiYmxvYiIsImFmdGVyIiwibXMiLCJ1bHRyb24iLCJjYWxsc2l0ZSIsImlzYXJyYXkiLCJxdWVyeXN0cmluZyIsInB1bnljb2RlIiwieHRlbmQiLCJpbmhlcml0cyIsImllZWU3NTQiLCJyYW5kb21ieXRlcyIsInBia2RmMiIsInBha28iLCJyaXBlbWQxNjAiLCJlbGxpcHRpYyIsImV2cF9ieXRlc3Rva2V5IiwiYnJvcmFuZCJdLCJtYXBwaW5ncyI6ImFBQUFBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQjtBQUNkQyxFQUFBQSxLQUFLLEVBQUU7QUFDTCxZQUFRLG9CQURIO0FBRUwsZUFBVyx1QkFGTjtBQUdMLGNBQVUsc0JBSEw7QUFJTCxZQUFRLEVBSkgsRUFETzs7QUFPZEMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEdBQUcsRUFBRTtBQUNILHNCQUFnQixrQ0FEYixFQURJLEVBUEc7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USxFQUFFLG9CQURQO0FBRUgsK0JBQXVCLCtCQUZwQixFQURhLEVBeFRaOzs7QUE4VFIsMkJBQXVCO0FBQ3JCL0MsTUFBQUEsR0FBRyxFQUFFO0FBQ0grQyxRQUFBQSxRQUFRLEVBQUUsb0JBRFA7QUFFSCx1QkFBZSx1QkFGWixFQURnQixFQTlUZjs7O0FBb1VSLHlCQUFxQjtBQUNuQi9DLE1BQUFBLEdBQUcsRUFBRTtBQUNIK0MsUUFBQUEsUUFBUSxFQUFFLG9CQURQO0FBRUgsK0JBQXVCLCtCQUZwQixFQURjLEVBcFViOzs7QUEwVVIseUJBQXFCO0FBQ25CL0MsTUFBQUEsR0FBRyxFQUFFO0FBQ0gsaUJBQVMsa0JBRE47QUFFSCtDLFFBQUFBLFFBQVEsRUFBRSxvQkFGUDtBQUdILCtCQUF1QiwrQkFIcEIsRUFEYyxFQTFVYjs7O0FBaVZSLGtDQUE4QjtBQUM1Qi9DLE1BQUFBLEdBQUcsRUFBRTtBQUNILHlCQUFpQix5QkFEZCxFQUR1QixFQWpWdEI7OztBQXNWUiw4Q0FBMEM7QUFDeENBLE1BQUFBLEdBQUcsRUFBRTtBQUNId0IsUUFBQUEsY0FBYyxFQUFFLDRCQURiLEVBRG1DLEVBdFZsQzs7O0FBMlZSLHNDQUFrQztBQUNoQ3hCLE1BQUFBLEdBQUcsRUFBRTtBQUNILDZCQUFxQiw2QkFEbEIsRUFEMkIsRUEzVjFCOzs7QUFnV1IsbUNBQStCO0FBQzdCQSxNQUFBQSxHQUFHLEVBQUU7QUFDSCtDLFFBQUFBLFFBQVEsRUFBRSxvQkFEUDtBQUVILDJCQUFtQiwyQkFGaEIsRUFEd0IsRUFoV3ZCLEVBM0JJLEVBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiU3lzdGVtSlMuY29uZmlnKHtcbiAgcGF0aHM6IHtcbiAgICAnbnBtOic6ICdAcGFja2FnZS1qc3BtL25wbS8nLFxuICAgICdnaXRodWI6JzogJ0BwYWNrYWdlLWpzcG0vZ2l0aHViLycsXG4gICAgJ2Jvd2VyOic6ICdAcGFja2FnZS1qc3BtL2Jvd2VyLycsXG4gICAgJ2FwcC8nOiAnJyxcbiAgfSxcbiAgZGV2Q29uZmlnOiB7XG4gICAgbWFwOiB7XG4gICAgICAncGx1Z2luLWJhYmVsJzogJ25wbTpzeXN0ZW1qcy1wbHVnaW4tYmFiZWxAMC4wLjIxJyxcbiAgICB9LFxuICB9LFxuICB0cmFuc3BpbGVyOiAncGx1Z2luLWJhYmVsJyxcbiAgcGFja2FnZXM6IHtcbiAgICBhcHA6IHtcbiAgICAgIG1haW46ICdhcHAuanMnLFxuICAgICAgbWV0YToge1xuICAgICAgICAnKi5qcyc6IHtcbiAgICAgICAgICBsb2FkZXI6ICdwbHVnaW4tYmFiZWwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtYXA6IHtcbiAgICAnanVzdGluZmFnbmFuaS9taXh3aXRoLmpzJzogJ2dpdGh1YjpqdXN0aW5mYWduYW5pL21peHdpdGguanNAbWFzdGVyJyxcbiAgfSxcbn0pXG5cblN5c3RlbUpTLmNvbmZpZyh7XG4gIHBhY2thZ2VDb25maWdQYXRoczogWyducG06QCovKi5qc29uJywgJ25wbToqLmpzb24nLCAnZ2l0aHViOiovKi5qc29uJ10sXG4gIG1hcDoge1xuICAgIGFzc2VydDogJ25wbTpqc3BtLW5vZGVsaWJzLWFzc2VydEAwLjIuMScsXG4gICAgYnVmZmVyOiAnbnBtOmpzcG0tbm9kZWxpYnMtYnVmZmVyQDAuMi4zJyxcbiAgICBjaGlsZF9wcm9jZXNzOiAnbnBtOmpzcG0tbm9kZWxpYnMtY2hpbGRfcHJvY2Vzc0AwLjIuMScsXG4gICAgY29uc3RhbnRzOiAnbnBtOmpzcG0tbm9kZWxpYnMtY29uc3RhbnRzQDAuMi4xJyxcbiAgICBjcnlwdG86ICducG06anNwbS1ub2RlbGlicy1jcnlwdG9AMC4yLjEnLFxuICAgICdlbmdpbmUuaW8tY2xpZW50JzogJ25wbTplbmdpbmUuaW8tY2xpZW50QDMuMS4xJyxcbiAgICBldmVudHM6ICducG06anNwbS1ub2RlbGlicy1ldmVudHNAMC4yLjInLFxuICAgIGZzOiAnbnBtOmpzcG0tbm9kZWxpYnMtZnNAMC4yLjEnLFxuICAgIGh0dHA6ICducG06anNwbS1ub2RlbGlicy1odHRwQDAuMi4wJyxcbiAgICBodHRwczogJ25wbTpqc3BtLW5vZGVsaWJzLWh0dHBzQDAuMi4yJyxcbiAgICBjc3M6ICdnaXRodWI6c3lzdGVtanMvcGx1Z2luLWNzc0AwLjEuMzInLFxuICAgIGh0bWw6ICdnaXRodWI6SHlwZXJjdWJlZC9zeXN0ZW1qcy1wbHVnaW4taHRtbEAwLjAuOCcsXG4gICAganNvbjogJ2dpdGh1YjpzeXN0ZW1qcy9wbHVnaW4tanNvbkAwLjMuMCcsXG4gICAgb3M6ICducG06anNwbS1ub2RlbGlicy1vc0AwLjIuMicsXG4gICAgcGF0aDogJ25wbTpqc3BtLW5vZGVsaWJzLXBhdGhAMC4yLjMnLFxuICAgIHByb2Nlc3M6ICducG06anNwbS1ub2RlbGlicy1wcm9jZXNzQDAuMi4xJyxcbiAgICBzdHJlYW06ICducG06anNwbS1ub2RlbGlicy1zdHJlYW1AMC4yLjEnLFxuICAgIHN0cmluZ19kZWNvZGVyOiAnbnBtOmpzcG0tbm9kZWxpYnMtc3RyaW5nX2RlY29kZXJAMC4yLjEnLFxuICAgIHVuZGVyc2NvcmU6ICducG06dW5kZXJzY29yZUAxLjguMycsXG4gICAgdXJsOiAnbnBtOmpzcG0tbm9kZWxpYnMtdXJsQDAuMi4xJyxcbiAgICB1dGlsOiAnbnBtOmpzcG0tbm9kZWxpYnMtdXRpbEAwLjIuMicsXG4gICAgdm06ICducG06anNwbS1ub2RlbGlicy12bUAwLjIuMScsXG4gICAgemxpYjogJ25wbTpqc3BtLW5vZGVsaWJzLXpsaWJAMC4yLjMnLFxuICB9LFxuICBwYWNrYWdlczoge1xuICAgICdnaXRodWI6SHlwZXJjdWJlZC9zeXN0ZW1qcy1wbHVnaW4taHRtbEAwLjAuOCc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICB3ZWJjb21wb25lbnRzanM6ICdnaXRodWI6d2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanNAMC43LjI0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmVuZ2luZS5pby1jbGllbnRAMy4xLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2NvbXBvbmVudC1pbmhlcml0JzogJ25wbTpjb21wb25lbnQtaW5oZXJpdEAwLjAuMycsXG4gICAgICAgICdjb21wb25lbnQtZW1pdHRlcic6ICducG06Y29tcG9uZW50LWVtaXR0ZXJAMS4yLjEnLFxuICAgICAgICBwYXJzZXVyaTogJ25wbTpwYXJzZXVyaUAwLjAuNScsXG4gICAgICAgIHBhcnNlcXM6ICducG06cGFyc2Vxc0AwLjAuNScsXG4gICAgICAgIHllYXN0OiAnbnBtOnllYXN0QDAuMS4yJyxcbiAgICAgICAgJ2hhcy1jb3JzJzogJ25wbTpoYXMtY29yc0AxLjEuMCcsXG4gICAgICAgIGluZGV4b2Y6ICducG06aW5kZXhvZkAwLjAuMScsXG4gICAgICAgICdlbmdpbmUuaW8tcGFyc2VyJzogJ25wbTplbmdpbmUuaW8tcGFyc2VyQDIuMS4xJyxcbiAgICAgICAgJ3htbGh0dHByZXF1ZXN0LXNzbCc6ICducG06eG1saHR0cHJlcXVlc3Qtc3NsQDEuNS4zJyxcbiAgICAgICAgcGFyc2Vqc29uOiAnbnBtOnBhcnNlanNvbkAwLjAuMycsXG4gICAgICAgIHdzOiAnbnBtOndzQDIuMy4xJyxcbiAgICAgICAgZGVidWc6ICducG06ZGVidWdAMi42LjgnLFxuICAgICAgICAnbm9kZS13cyc6ICducG06d3NAMi4zLjEnLFxuICAgICAgICAnbm9kZS14bWxodHRwcmVxdWVzdC1zc2wnOiAnbnBtOnhtbGh0dHByZXF1ZXN0LXNzbEAxLjUuMycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpwYXJzZXVyaUAwLjAuNSc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnYmV0dGVyLWFzc2VydCc6ICducG06YmV0dGVyLWFzc2VydEAxLjAuMicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpwYXJzZXFzQDAuMC41Jzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdiZXR0ZXItYXNzZXJ0JzogJ25wbTpiZXR0ZXItYXNzZXJ0QDEuMC4yJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOnBhcnNlanNvbkAwLjAuMyc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnYmV0dGVyLWFzc2VydCc6ICducG06YmV0dGVyLWFzc2VydEAxLjAuMicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTplbmdpbmUuaW8tcGFyc2VyQDIuMS4xJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdhcnJheWJ1ZmZlci5zbGljZSc6ICducG06YXJyYXlidWZmZXIuc2xpY2VAMC4wLjYnLFxuICAgICAgICAnYmFzZTY0LWFycmF5YnVmZmVyJzogJ25wbTpiYXNlNjQtYXJyYXlidWZmZXJAMC4xLjUnLFxuICAgICAgICBibG9iOiAnbnBtOmJsb2JAMC4wLjQnLFxuICAgICAgICBhZnRlcjogJ25wbTphZnRlckAwLjguMicsXG4gICAgICAgICdoYXMtYmluYXJ5Mic6ICducG06aGFzLWJpbmFyeTJAMS4wLjInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06ZGVidWdAMi42LjgnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgbXM6ICducG06bXNAMi4wLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06d3NAMi4zLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgdWx0cm9uOiAnbnBtOnVsdHJvbkAxLjEuMCcsXG4gICAgICAgICdzYWZlLWJ1ZmZlcic6ICducG06c2FmZS1idWZmZXJANS4wLjEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06YmV0dGVyLWFzc2VydEAxLjAuMic6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBjYWxsc2l0ZTogJ25wbTpjYWxsc2l0ZUAxLjAuMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpoYXMtYmluYXJ5MkAxLjAuMic6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBpc2FycmF5OiAnbnBtOmlzYXJyYXlAMi4wLjEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06anNwbS1ub2RlbGlicy11cmxAMC4yLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgdXJsOiAnbnBtOnVybEAwLjExLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06anNwbS1ub2RlbGlicy1odHRwQDAuMi4wJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdodHRwLWJyb3dzZXJpZnknOiAnbnBtOnN0cmVhbS1odHRwQDIuNy4yJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmpzcG0tbm9kZWxpYnMtYnVmZmVyQDAuMi4zJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGJ1ZmZlcjogJ25wbTpidWZmZXJANS4wLjcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06dXJsQDAuMTEuMCc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBxdWVyeXN0cmluZzogJ25wbTpxdWVyeXN0cmluZ0AwLjIuMCcsXG4gICAgICAgIHB1bnljb2RlOiAnbnBtOnB1bnljb2RlQDEuMy4yJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOnN0cmVhbS1odHRwQDIuNy4yJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdidWlsdGluLXN0YXR1cy1jb2Rlcyc6ICducG06YnVpbHRpbi1zdGF0dXMtY29kZXNAMy4wLjAnLFxuICAgICAgICAncmVhZGFibGUtc3RyZWFtJzogJ25wbTpyZWFkYWJsZS1zdHJlYW1AMi4zLjMnLFxuICAgICAgICB4dGVuZDogJ25wbTp4dGVuZEA0LjAuMScsXG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ3RvLWFycmF5YnVmZmVyJzogJ25wbTp0by1hcnJheWJ1ZmZlckAxLjAuMScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpyZWFkYWJsZS1zdHJlYW1AMi4zLjMnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgaXNhcnJheTogJ25wbTppc2FycmF5QDEuMC4wJyxcbiAgICAgICAgJ3NhZmUtYnVmZmVyJzogJ25wbTpzYWZlLWJ1ZmZlckA1LjEuMScsXG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ2NvcmUtdXRpbC1pcyc6ICducG06Y29yZS11dGlsLWlzQDEuMC4yJyxcbiAgICAgICAgJ3V0aWwtZGVwcmVjYXRlJzogJ25wbTp1dGlsLWRlcHJlY2F0ZUAxLjAuMicsXG4gICAgICAgIHN0cmluZ19kZWNvZGVyOiAnbnBtOnN0cmluZ19kZWNvZGVyQDEuMC4zJyxcbiAgICAgICAgJ3Byb2Nlc3MtbmV4dGljay1hcmdzJzogJ25wbTpwcm9jZXNzLW5leHRpY2stYXJnc0AxLjAuNycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpidWZmZXJANS4wLjcnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2Jhc2U2NC1qcyc6ICducG06YmFzZTY0LWpzQDEuMi4xJyxcbiAgICAgICAgaWVlZTc1NDogJ25wbTppZWVlNzU0QDEuMS44JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmpzcG0tbm9kZWxpYnMtY3J5cHRvQDAuMi4xJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdjcnlwdG8tYnJvd3NlcmlmeSc6ICducG06Y3J5cHRvLWJyb3dzZXJpZnlAMy4xMS4xJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmNyeXB0by1icm93c2VyaWZ5QDMuMTEuMSc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBpbmhlcml0czogJ25wbTppbmhlcml0c0AyLjAuMycsXG4gICAgICAgICdjcmVhdGUtZWNkaCc6ICducG06Y3JlYXRlLWVjZGhANC4wLjAnLFxuICAgICAgICAnY3JlYXRlLWhhc2gnOiAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJyxcbiAgICAgICAgJ3B1YmxpYy1lbmNyeXB0JzogJ25wbTpwdWJsaWMtZW5jcnlwdEA0LjAuMCcsXG4gICAgICAgICdicm93c2VyaWZ5LWNpcGhlcic6ICducG06YnJvd3NlcmlmeS1jaXBoZXJAMS4wLjAnLFxuICAgICAgICByYW5kb21ieXRlczogJ25wbTpyYW5kb21ieXRlc0AyLjAuNScsXG4gICAgICAgICdjcmVhdGUtaG1hYyc6ICducG06Y3JlYXRlLWhtYWNAMS4xLjYnLFxuICAgICAgICAnZGlmZmllLWhlbGxtYW4nOiAnbnBtOmRpZmZpZS1oZWxsbWFuQDUuMC4yJyxcbiAgICAgICAgcGJrZGYyOiAnbnBtOnBia2RmMkAzLjAuMTMnLFxuICAgICAgICAnYnJvd3NlcmlmeS1zaWduJzogJ25wbTpicm93c2VyaWZ5LXNpZ25ANC4wLjQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06anNwbS1ub2RlbGlicy16bGliQDAuMi4zJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdicm93c2VyaWZ5LXpsaWInOiAnbnBtOmJyb3dzZXJpZnktemxpYkAwLjEuNCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpicm93c2VyaWZ5LXpsaWJAMC4xLjQnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ3JlYWRhYmxlLXN0cmVhbSc6ICducG06cmVhZGFibGUtc3RyZWFtQDIuMy4zJyxcbiAgICAgICAgcGFrbzogJ25wbTpwYWtvQDAuMi45JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ2NpcGhlci1iYXNlJzogJ25wbTpjaXBoZXItYmFzZUAxLjAuNCcsXG4gICAgICAgIHJpcGVtZDE2MDogJ25wbTpyaXBlbWQxNjBAMi4wLjEnLFxuICAgICAgICAnc2hhLmpzJzogJ25wbTpzaGEuanNAMi40LjgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06cHVibGljLWVuY3J5cHRANC4wLjAnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2NyZWF0ZS1oYXNoJzogJ25wbTpjcmVhdGUtaGFzaEAxLjEuMycsXG4gICAgICAgIHJhbmRvbWJ5dGVzOiAnbnBtOnJhbmRvbWJ5dGVzQDIuMC41JyxcbiAgICAgICAgJ2Jyb3dzZXJpZnktcnNhJzogJ25wbTpicm93c2VyaWZ5LXJzYUA0LjAuMScsXG4gICAgICAgICdwYXJzZS1hc24xJzogJ25wbTpwYXJzZS1hc24xQDUuMS4wJyxcbiAgICAgICAgJ2JuLmpzJzogJ25wbTpibi5qc0A0LjExLjgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06cmFuZG9tYnl0ZXNAMi4wLjUnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ3NhZmUtYnVmZmVyJzogJ25wbTpzYWZlLWJ1ZmZlckA1LjEuMScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpjcmVhdGUtaG1hY0AxLjEuNic6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnY3JlYXRlLWhhc2gnOiAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJyxcbiAgICAgICAgaW5oZXJpdHM6ICducG06aW5oZXJpdHNAMi4wLjMnLFxuICAgICAgICAnc2FmZS1idWZmZXInOiAnbnBtOnNhZmUtYnVmZmVyQDUuMS4xJyxcbiAgICAgICAgJ2NpcGhlci1iYXNlJzogJ25wbTpjaXBoZXItYmFzZUAxLjAuNCcsXG4gICAgICAgIHJpcGVtZDE2MDogJ25wbTpyaXBlbWQxNjBAMi4wLjEnLFxuICAgICAgICAnc2hhLmpzJzogJ25wbTpzaGEuanNAMi40LjgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06ZGlmZmllLWhlbGxtYW5ANS4wLjInOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgcmFuZG9tYnl0ZXM6ICducG06cmFuZG9tYnl0ZXNAMi4wLjUnLFxuICAgICAgICAnbWlsbGVyLXJhYmluJzogJ25wbTptaWxsZXItcmFiaW5ANC4wLjAnLFxuICAgICAgICAnYm4uanMnOiAnbnBtOmJuLmpzQDQuMTEuOCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpicm93c2VyaWZ5LXNpZ25ANC4wLjQnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2NyZWF0ZS1oYXNoJzogJ25wbTpjcmVhdGUtaGFzaEAxLjEuMycsXG4gICAgICAgICdjcmVhdGUtaG1hYyc6ICducG06Y3JlYXRlLWhtYWNAMS4xLjYnLFxuICAgICAgICBpbmhlcml0czogJ25wbTppbmhlcml0c0AyLjAuMycsXG4gICAgICAgICdicm93c2VyaWZ5LXJzYSc6ICducG06YnJvd3NlcmlmeS1yc2FANC4wLjEnLFxuICAgICAgICAncGFyc2UtYXNuMSc6ICducG06cGFyc2UtYXNuMUA1LjEuMCcsXG4gICAgICAgIGVsbGlwdGljOiAnbnBtOmVsbGlwdGljQDYuNC4wJyxcbiAgICAgICAgJ2JuLmpzJzogJ25wbTpibi5qc0A0LjExLjgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06cGJrZGYyQDMuMC4xMyc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnY3JlYXRlLWhhc2gnOiAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJyxcbiAgICAgICAgJ2NyZWF0ZS1obWFjJzogJ25wbTpjcmVhdGUtaG1hY0AxLjEuNicsXG4gICAgICAgICdzYWZlLWJ1ZmZlcic6ICducG06c2FmZS1idWZmZXJANS4xLjEnLFxuICAgICAgICByaXBlbWQxNjA6ICducG06cmlwZW1kMTYwQDIuMC4xJyxcbiAgICAgICAgJ3NoYS5qcyc6ICducG06c2hhLmpzQDIuNC44JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOnN0cmluZ19kZWNvZGVyQDEuMC4zJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdzYWZlLWJ1ZmZlcic6ICducG06c2FmZS1idWZmZXJANS4xLjEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06YnJvd3NlcmlmeS1jaXBoZXJAMS4wLjAnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2Jyb3dzZXJpZnktYWVzJzogJ25wbTpicm93c2VyaWZ5LWFlc0AxLjAuNicsXG4gICAgICAgIGV2cF9ieXRlc3Rva2V5OiAnbnBtOmV2cF9ieXRlc3Rva2V5QDEuMC4yJyxcbiAgICAgICAgJ2Jyb3dzZXJpZnktZGVzJzogJ25wbTpicm93c2VyaWZ5LWRlc0AxLjAuMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpjcmVhdGUtZWNkaEA0LjAuMCc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBlbGxpcHRpYzogJ25wbTplbGxpcHRpY0A2LjQuMCcsXG4gICAgICAgICdibi5qcyc6ICducG06Ym4uanNANC4xMS44JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmNpcGhlci1iYXNlQDEuMC40Jzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ3NhZmUtYnVmZmVyJzogJ25wbTpzYWZlLWJ1ZmZlckA1LjEuMScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpyaXBlbWQxNjBAMi4wLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgaW5oZXJpdHM6ICducG06aW5oZXJpdHNAMi4wLjMnLFxuICAgICAgICAnaGFzaC1iYXNlJzogJ25wbTpoYXNoLWJhc2VAMi4wLjInLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06c2hhLmpzQDIuNC44Jzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmJyb3dzZXJpZnktYWVzQDEuMC42Jzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdjaXBoZXItYmFzZSc6ICducG06Y2lwaGVyLWJhc2VAMS4wLjQnLFxuICAgICAgICAnY3JlYXRlLWhhc2gnOiAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJyxcbiAgICAgICAgZXZwX2J5dGVzdG9rZXk6ICducG06ZXZwX2J5dGVzdG9rZXlAMS4wLjInLFxuICAgICAgICBpbmhlcml0czogJ25wbTppbmhlcml0c0AyLjAuMycsXG4gICAgICAgICdidWZmZXIteG9yJzogJ25wbTpidWZmZXIteG9yQDEuMC4zJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmV2cF9ieXRlc3Rva2V5QDEuMC4yJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdzYWZlLWJ1ZmZlcic6ICducG06c2FmZS1idWZmZXJANS4xLjEnLFxuICAgICAgICAnbWQ1LmpzJzogJ25wbTptZDUuanNAMS4zLjQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06YnJvd3NlcmlmeS1yc2FANC4wLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgcmFuZG9tYnl0ZXM6ICducG06cmFuZG9tYnl0ZXNAMi4wLjUnLFxuICAgICAgICAnYm4uanMnOiAnbnBtOmJuLmpzQDQuMTEuOCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpwYXJzZS1hc24xQDUuMS4wJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgICdicm93c2VyaWZ5LWFlcyc6ICducG06YnJvd3NlcmlmeS1hZXNAMS4wLjYnLFxuICAgICAgICAnY3JlYXRlLWhhc2gnOiAnbnBtOmNyZWF0ZS1oYXNoQDEuMS4zJyxcbiAgICAgICAgcGJrZGYyOiAnbnBtOnBia2RmMkAzLjAuMTMnLFxuICAgICAgICBldnBfYnl0ZXN0b2tleTogJ25wbTpldnBfYnl0ZXN0b2tleUAxLjAuMicsXG4gICAgICAgICdhc24xLmpzJzogJ25wbTphc24xLmpzQDQuOS4xJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOm1pbGxlci1yYWJpbkA0LjAuMCc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnYm4uanMnOiAnbnBtOmJuLmpzQDQuMTEuOCcsXG4gICAgICAgIGJyb3JhbmQ6ICducG06YnJvcmFuZEAxLjEuMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpicm93c2VyaWZ5LWRlc0AxLjAuMCc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnY2lwaGVyLWJhc2UnOiAnbnBtOmNpcGhlci1iYXNlQDEuMC40JyxcbiAgICAgICAgaW5oZXJpdHM6ICducG06aW5oZXJpdHNAMi4wLjMnLFxuICAgICAgICAnZGVzLmpzJzogJ25wbTpkZXMuanNAMS4wLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06ZWxsaXB0aWNANi40LjAnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgaW5oZXJpdHM6ICducG06aW5oZXJpdHNAMi4wLjMnLFxuICAgICAgICAnYm4uanMnOiAnbnBtOmJuLmpzQDQuMTEuOCcsXG4gICAgICAgICdtaW5pbWFsaXN0aWMtYXNzZXJ0JzogJ25wbTptaW5pbWFsaXN0aWMtYXNzZXJ0QDEuMC4wJyxcbiAgICAgICAgJ21pbmltYWxpc3RpYy1jcnlwdG8tdXRpbHMnOiAnbnBtOm1pbmltYWxpc3RpYy1jcnlwdG8tdXRpbHNAMS4wLjEnLFxuICAgICAgICBicm9yYW5kOiAnbnBtOmJyb3JhbmRAMS4xLjAnLFxuICAgICAgICAnaG1hYy1kcmJnJzogJ25wbTpobWFjLWRyYmdAMS4wLjEnLFxuICAgICAgICAnaGFzaC5qcyc6ICducG06aGFzaC5qc0AxLjEuMycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTptZDUuanNAMS4zLjQnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ2hhc2gtYmFzZSc6ICducG06aGFzaC1iYXNlQDMuMC40JyxcbiAgICAgICAgaW5oZXJpdHM6ICducG06aW5oZXJpdHNAMi4wLjMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06aGFzaC1iYXNlQDIuMC4yJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnbnBtOmhtYWMtZHJiZ0AxLjAuMSc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnaGFzaC5qcyc6ICducG06aGFzaC5qc0AxLjEuMycsXG4gICAgICAgICdtaW5pbWFsaXN0aWMtYXNzZXJ0JzogJ25wbTptaW5pbWFsaXN0aWMtYXNzZXJ0QDEuMC4wJyxcbiAgICAgICAgJ21pbmltYWxpc3RpYy1jcnlwdG8tdXRpbHMnOiAnbnBtOm1pbmltYWxpc3RpYy1jcnlwdG8tdXRpbHNAMS4wLjEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06ZGVzLmpzQDEuMC4wJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ21pbmltYWxpc3RpYy1hc3NlcnQnOiAnbnBtOm1pbmltYWxpc3RpYy1hc3NlcnRAMS4wLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06aGFzaC1iYXNlQDMuMC40Jzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ3NhZmUtYnVmZmVyJzogJ25wbTpzYWZlLWJ1ZmZlckA1LjEuMScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpoYXNoLmpzQDEuMS4zJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ21pbmltYWxpc3RpYy1hc3NlcnQnOiAnbnBtOm1pbmltYWxpc3RpYy1hc3NlcnRAMS4wLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06YXNuMS5qc0A0LjkuMSc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnYm4uanMnOiAnbnBtOmJuLmpzQDQuMTEuOCcsXG4gICAgICAgIGluaGVyaXRzOiAnbnBtOmluaGVyaXRzQDIuMC4zJyxcbiAgICAgICAgJ21pbmltYWxpc3RpYy1hc3NlcnQnOiAnbnBtOm1pbmltYWxpc3RpYy1hc3NlcnRAMS4wLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06anNwbS1ub2RlbGlicy1vc0AwLjIuMic6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICAnb3MtYnJvd3NlcmlmeSc6ICducG06b3MtYnJvd3NlcmlmeUAwLjMuMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpqc3BtLW5vZGVsaWJzLXN0cmluZ19kZWNvZGVyQDAuMi4xJzoge1xuICAgICAgbWFwOiB7XG4gICAgICAgIHN0cmluZ19kZWNvZGVyOiAnbnBtOnN0cmluZ19kZWNvZGVyQDAuMTAuMzEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgICducG06anNwbS1ub2RlbGlicy1zdHJlYW1AMC4yLjEnOiB7XG4gICAgICBtYXA6IHtcbiAgICAgICAgJ3N0cmVhbS1icm93c2VyaWZ5JzogJ25wbTpzdHJlYW0tYnJvd3NlcmlmeUAyLjAuMScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJ25wbTpzdHJlYW0tYnJvd3NlcmlmeUAyLjAuMSc6IHtcbiAgICAgIG1hcDoge1xuICAgICAgICBpbmhlcml0czogJ25wbTppbmhlcml0c0AyLjAuMycsXG4gICAgICAgICdyZWFkYWJsZS1zdHJlYW0nOiAnbnBtOnJlYWRhYmxlLXN0cmVhbUAyLjMuMycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl19