const { Worker } = require('node:worker_threads');
const { execSync } = require('child_process')

function getCurrentThreadCount() {
    return parseInt(execSync(`ps -M ${process.pid} | wc -l`))
}


console.log('----------------- START INFO -------------------------')
console.log('Number of thread setted: ' + process.env.UV_THREADPOOL_SIZE)
console.log('Number of thread: ' + getCurrentThreadCount())
console.log('PID: ' + process.pid)
console.log('----------------- END INFO -------------------------\n\n')

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
 * You can let worker listening all, if you use ```parentPort.on``` 
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