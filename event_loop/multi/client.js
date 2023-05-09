// import the addEvent function from eventQueue.js
const addEvent = require('./eventQueue.js');

const fs = require('fs');
const readStream = fs.createReadStream('data.txt', { encoding: 'utf8' });

// attach a 'data' event listener to the stream
readStream.on('data', (chunk) => {
  // add a new event to the queue for each chunk of data
  addEvent(() => processChunk(chunk));
});

// function to process each chunk of data
function processChunk(chunk) {
  // do something with the chunk of data
  console.log(chunk);
}
