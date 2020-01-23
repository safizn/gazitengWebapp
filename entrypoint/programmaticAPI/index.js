const projectConfig = require('../../configuration'),
  path = require('path'),
  filesystem = require('fs')

// • Run
if (filesystem.existsSync(projectConfig.directory.distribution)) {
  projectConfig.runtimeVariable.DISTRIBUTION = true // set DISTRIBUTION variable
  module.exports = require(projectConfig.directory.distribution)
} else {
  // • Transpilation (babelJSCompiler)
  const { Compiler } = require('@deployment/javascriptTranspilation')
  let compiler = new Compiler({ callerPath: __dirname })
  compiler.requireHook({ restrictToTargetProject: true })
  module.exports = require(path.join(projectConfig.directory.source, projectConfig.entrypoint.programmaticAPI))
  // process.on('exit', () => {
  //   console.log(compiler.loadedFiles.map(value => value.filename))
  //   console.log(compiler.config.ignore)
  // })
}
