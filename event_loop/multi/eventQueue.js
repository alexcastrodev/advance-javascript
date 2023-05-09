// initialize the event queue
const eventQueue = [];

// function to add an event to the queue
function addEvent(callback, delay) {
  // create a new event object
  const event = {
    callback,
    delay
  };

  // add the event to the queue
  eventQueue.push(event);
}

// function to run the event loop
function eventLoop() {
  // keep looping until there are no more events in the queue
  while (eventQueue.length > 0) {
    // get the next event from the queue
    const event = eventQueue.shift();

    // execute the event's callback function
    event.callback();

    // if there is a delay, wait for it
    if (event.delay) {
      setTimeout(() => {}, event.delay);
    }
  }

  // schedule the next iteration of the event loop
  setTimeout(eventLoop, 0);
}

// start the event loop
eventLoop();

// export the addEvent function
module.exports = addEvent;