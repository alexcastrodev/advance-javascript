import {setTimeout} from 'timers/promises';

const controller = new AbortController();

setImmediate(() => {
    Math.random() > 0.5 ? controller.abort() : null
})

try {
    const result = await setTimeout(5000, 'Hello World!', { 
        signal: controller.signal
    })
    console.log(result)
} catch {
    console.error('Timeout!')
}
