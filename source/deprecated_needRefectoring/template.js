/*
Template Graph:

  "entrypoint HTML" 73b661df-2f53-498c-a01b-d3db971f1a3e --> execute underscoreRendering template/root/entrypoint.html
    -header
      underscoreRendering template/root/systemjsSetting.js.html
      underscoreRendering template/root/webcomponentPolyfill.js.html
      underscoreRendering template/root/entrypoint.js.html
      underscoreRendering asset/metadata/metadata.html
      underscoreRendering wrapJsTag template/root/babelTranspiler.js
    -bodyOpen
    -bodyClose
      underscoreRendering execute wrapJsTag template/root/serviceWorker.js
      underscoreRendering wrapJsTag template/root/webScoket.js
      underscoreRendering wrapJsTag template/root/googleAnalytics.js
*/

/*
Middleware graph: 

"staticContent": --> execute appscript/utility/useragentDetection.js
  useragentDetection.js
  bodyParser.js
  serverCommonFunctionality.js
  notFound.js
  2. NodeReference 68fb59e3-af0b-4ea2-800e-7e7e37d7cc31
  3. "static assets" da18242e-792e-4e44-a12b-b280f6331b7c
  4. NodeReference a7912856-ad5a-46b0-b980-67fb500af399
  5. "Static upload files" 81cc5f3a-ff61-454f-b6bb-49713c841c29

"Root folder & template": --> EMPTY
  "Root template" --> EMPTY
    languageContent.js
    useragentDetection.js
    bodyParser.js
    serverCommonFunctionality.js
    notFound.js
    "static template files" --> arguments: "{"directoryRelativePath":"/template/","options":{"gzip":true}}"
    "renderTemplateDocument - main root template" --> {"documentKey":"0d65c113-acce-4f01-8eea-ab6cb7152405"}

"Service worker file wrapper - WebappUI Port"
  useragentDetection.js
  bodyParser.js
  serverCommonFunctionality.js
  notFound.js
  "Service worker file" --> serveFile.js arguments: "{"filePath":"/asset/javascript/serviceWorker/serviceWorker.js","renderType":"default","mimeType":"application/javascript","options":{"gzip":true}}

"set response headers + Common functions + language content + cache"
  setResponseHeaders.js
  languageContent.js
  useragentDetection.js
  bodyParser.js
  serverCommonFunctionality.js
  notFound.js
  cacheControl.js

*/
