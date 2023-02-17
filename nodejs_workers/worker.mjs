import { parentPort } from 'node:worker_threads';
import state, { queue } from './state.mjs'

console.log('\n----------------- Worker -------------------------')

parentPort.once('message', (message) => {
    console.log('\nMain Thread said: \n' + message)
    // parentPort.postMessage('Yes, i do.');

    // Here is empty
    console.log('\ WORKER: Queue: \n' + state[queue])

    setTimeout(() => {
        parentPort.postMessage('Yes, i do.');
    }, 1000)

});