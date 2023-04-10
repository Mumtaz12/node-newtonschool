// NODE JS
// Its a environment to run javascript

// FE -> Jquery, angular, react...
// 2009 Ryan Dahl -> PhD work -> integrate JS + chrome V8 => Node
// V8 + C++ => Node

// Why Node?
///---> It’s a light, scalable and open-source language platform which makes it very easy to build apps even at the enterprise level also. 
//-->Overall it increases the efficiency of the development process as it fills the gap between frontend and backend applications.
// JS => React + Node -> FSD
// Extremely fast ->

/**
 * Single threaded asynchronous language
 //A single-thread language is one with a single call stack and a single memory heap. It means that it runs only one thing at a time.

//A stack is a continuous region of memory, allocating local context for each executed function.

//A heap is a much larger region, storing everything allocated dynamically.

//A call stack is a data structure which basically records where we are in the program.

///Asynchronous with a single thread: Tasks start being executed without waiting for a different task to finish. At a given time, only a single task can be executed.
 * It follows non blocking I/O operations
 ///-->initiate a request in parallel for user2 without waiting for the response to the request for user1. The requests in Node.js can initiate in parallel. 
 //This non-blocking I/O eliminates the need for multi-threading.
 **/

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// IO based -> Node js preferred
// CPU intensive -> It is not preferred

// Multi threading -> additional work

// console.time();
// let i = 0;
// while (i < 100000000000) {
//   i++;
// }
// console.timeEnd();

// console.log(window); // error
// console.log(global); // replacement of windows

// Node JS -> modular system

// (function () {
// console.log(10);

// function display() {
//   console.log(20);
// }

// display();
// })();
// IIFE -> Immediately Invoked Function expression

// (function (name) {
//   console.log("vasanth fn", name);
// })("good boy");

// modules -> each and every JS file forms a module
// console.log(module);

// const logger = require("./logger");
// const { add, sub } = require("./logger");

// // console.log("logger", logger.add(5, 10));
// console.log("add", add(5, 10));
// console.log("sub", sub(15, 10));
// console.log("global----", global);
