# Introduction

Hi there!

I am currently studying for a JavaScript certification and this repository is part of my extra study on NodeJS and JavaScript runtimes.

## What is NodeJS
NodeJS is a cross-platform, open-source, back-end JavaScript runtime environment that executes JavaScript code on the server. It provides an environment to run JavaScript outside of a web browser and allows developers to build server-side applications with JavaScript.

JavaScript runtimes, on the other hand, are environments in which JavaScript code can be executed. The most popular JavaScript runtime is the web browser, but there are other runtimes such as NodeJS, Electron, and Nashorn.

## Content
In this repository, you will find various resources and examples of NodeJS and JavaScript runtimes. I will cover topics such as the basics of NodeJS, how to use NodeJS modules, and how to build a web server with NodeJS. I will also explore the differences between NodeJS and other JavaScript runtimes and discuss the benefits of using NodeJS for server-side development.

Whether you are a beginner or an experienced developer, this repository will provide you with valuable information and resources to help you better understand NodeJS and JavaScript runtimes.

So if you're ready to dive into the world of NodeJS and JavaScript runtimes, let's get started!

## Extra

If you like my introduction, it was not me, but ChatGPT :P



### Another Extra

You can also limit number of thread:

on unix:
UV_THREADPOOL_SIZE=100 node main.js

on windows:
set UV_THREADPOOL_SIZE=1 & node app.js

source:

https://www.youtube.com/watch?v=f7MY2OtI7nA (47:00)

Title: Live - Exterminando a lenda do Node.js single-threaded na prática

### Another Extra

https://dev.to/johnjardincodes/increase-node-js-performance-with-libuv-thread-pool-5h10


Libuv Thread Pool
Libuv initiates a thread pool of 4 threads that it uses to offload synchronous operations to. In doing this, Libuv ensures that our application does not get blocked unnecessarily by synchronous tasks.

It is here that we will take advantage of a setting to better suit the specs of our machine or the virtual machine that our app will be deployed to. This is because we are allowed to change the default value of 4 threads to anything up to 1024 threads. We achieve this by setting the UV_THREADPOOL_SIZE Node variable.