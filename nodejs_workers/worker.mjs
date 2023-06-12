import { parentPort } from 'node:worker_threads';
import state, { queue } from './state.mjs'

console.log('\n----------------- Worker -------------------------')


function performWork() {
    setTimeout(() => {
      console.log('loop')
      // Repeat the work
      performWork();
    }, 1000); // Delay for 1 second
  }
  

  
parentPort.once('message', (message) => {
    console.log('\nMain Thread said: \n' + message)
    // parentPort.postMessage('Yes, i do.');

    // Here is empty
    console.log('\ WORKER: Queue: \n' + state[queue])
    
    setTimeout(() => {
        parentPort.postMessage('Yes, i do.');
    }, 1000)
});

performWork()