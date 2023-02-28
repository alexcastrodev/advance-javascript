## Workers

This code creates a new Worker thread using 

the 'node:worker_threads' module. 

It then sends a message to the worker thread and sets up 

three timeouts to send additional messages. 

The main thread then listens for a response from the worker 

thread and logs it to the console.


source: https://nodejs.org/api/worker_threads.html



### Another Extra

You can also limit number of thread:

on unix:
UV_THREADPOOL_SIZE=100 node main.js

on windows:
set UV_THREADPOOL_SIZE=1 & node app.js

source:

https://www.youtube.com/watch?v=f7MY2OtI7nA (47:00)

Title: Live - Exterminando a lenda do Node.js single-threaded na prática

### Extra

https://dev.to/johnjardincodes/increase-node-js-performance-with-libuv-thread-pool-5h10


Libuv Thread Pool
Libuv initiates a thread pool of 4 threads that it uses to offload synchronous operations to. In doing this, Libuv ensures that our application does not get blocked unnecessarily by synchronous tasks.

It is here that we will take advantage of a setting to better suit the specs of our machine or the virtual machine that our app will be deployed to. This is because we are allowed to change the default value of 4 threads to anything up to 1024 threads. We achieve this by setting the UV_THREADPOOL_SIZE Node variable.