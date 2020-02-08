const path = require('path')
const resolvedModule = {
  get deploymentScript() {
    return path.dirname(require.resolve(`@deployment/deploymentScript/package.json`))
  },
}

module.exports = function() {
  return [
    {
      type: 'directory',
      path: `${resolvedModule.deploymentScript}/script`,
    },
  ]
}
