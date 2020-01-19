/**
 * Interface for running mocha function through childprocess.spawn api (as it allows only a module path to be passed as parameter).
 */
import { application } from '../app.js'
import assert from 'assert'
// import { consoleLogOverwrite } from '../../utility/consoleLogOverwrite.js'

// consoleLogOverwrite()

process.on('SIGINT', () => console.log('application subprocess iterrupted.') && process.exit(0))

assert(process.argv[2], '• Must pass command arguments to run application cli adapter script.')
let args = JSON.parse(process.argv[2])
application(...args).catch(error => console.log(error))
