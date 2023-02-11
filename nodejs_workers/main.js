const { Worker } = require('node:worker_threads');


console.log('----------------- Main Thread -------------------------')
const worker = new Worker('./worker.js');

console.log('\n I will call the worker')

worker.once('message', (message) => {
    console.log('\n----------------- Main Thread -------------------------\n')

    console.log('Worker said:\n' + message)
    console.log('\n---------------- END -------------------------')
});

worker.postMessage('Worker, are you listening?');

/**
 * None of these will execute.
 * When we use once, just the first message will be executed.
 */

setTimeout(() => {
    worker.postMessage('Worker, are you really really really listening?');
}, 10)

setTimeout(() => {
    worker.postMessage('Worker, are you really really listening?');
}, 0)

// Big Disclaimer:
// This will be executed if we comment line 16
setImmediate(() => {
    worker.postMessage('Worker, are you really listening?');
})