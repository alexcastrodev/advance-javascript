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
  
    // after all events have been processed, schedule the next event loop iteration
    setTimeout(eventLoop, 0);
  }
  
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
  
  // example usage
  addEvent(() => console.log("Event 1"));
  addEvent(() => console.log("Event 2"), 1000);
  addEvent(() => console.log("Event 3"), 2000);
  
  //setTimeout() is not strictly necessary for implementing an event loop in JavaScript, but it's a common practice to use it to avoid blocking the main thread and to ensure that the loop runs smoothly.
  // start the event loop
  eventLoop();