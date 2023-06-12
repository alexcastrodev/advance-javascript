const os = require('os')
// const stream = require('stream')

function readBytes() {
    const streamReadable = new (require("stream")).Readable(); 
    // const streamReadable = new stream.Readable(); 
    streamReadable.push('A ')
    streamReadable.push('B ')
    streamReadable.push(null)
}


function formatBytes(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = Math.floor(Math.log2(bytes) / 10);
    return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
  }

let i = 0
while(i < 200000) {
    console.log(os.freemem())
    readBytes()
    i++
}

const used = process.memoryUsage();
console.log(`Memory usage: ${formatBytes(used.heapUsed)}`);

