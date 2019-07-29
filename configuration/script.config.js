const path = require('path')
const resolvedModule = {
  get deploymentScript() {
    return path.dirname(require.resolve(`@dependency/deploymentScript/package.json`))
  },
}

module.exports = {
  script: [
    // TODO: add - production, run, test
    {
      type: 'directory',
      path: `${resolvedModule.deploymentScript}/script/JSProject`,
    },
    {
      type: 'directory',
      path: './script',
    },
  ],
}
