## Workers

This code creates a new Worker thread using 

the 'node:worker_threads' module. 

It then sends a message to the worker thread and sets up 

three timeouts to send additional messages. 

The main thread then listens for a response from the worker 

thread and logs it to the console.


source: https://nodejs.org/api/worker_threads.html