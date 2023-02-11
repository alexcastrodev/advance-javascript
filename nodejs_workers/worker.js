const { parentPort } = require('node:worker_threads');

console.log('\n----------------- Worker -------------------------')

parentPort.once('message', (message) => {
    console.log('\nMain Thread said: \n' + message)
    // parentPort.postMessage('Yes, i do.');


    setTimeout(() => {
        parentPort.postMessage('Yes, i do.');
    }, 1000)

});