//client --> user is a client, jo server ka user hota hai wo ek client hota hai.

const fs = require("fs");
const os = require("os");

//client makes request to the server.
//the node js server handles the requests as:
//1. there is an event queue, wherein all the incoming requests and tasks are queued.
//2. there is an event loop inside the nodejs server that constantly checks the queue for any pending tasks.
//3. event loop finds out the request as Bliocking request or non-blocking requests
//Blocking: sybchronous
//non-blocking: asynchronous

//the blocking requests are executed directly, and the response is sent to the user
//blocking requests are sent to a thread pool, actually the request requests for a thread for its execution.
//there are various threads in the thread pool, which are allocated to the requests/tasks, they are handled by these threads and then the response is communicated to the user and thread comes back to the thread pool.

// console.log("1");

// //blocking
// const result = fs.readFileSync("./02_basics/contacts.txt", "utf-8");
// console.log(result)
// console.log("8");
// console.log("9");
// console.log("10");

/*
1
Saket Sharma: +91 9977228977
Saket Sharma: +91 6260988375Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 

8
9
10
*/

// console.log("1");

// //non-blocking
// fs.readFile("./02_basics/contacts.txt", "utf-8", (err, result) => {
//     console.log(result);
// });
// console.log("10");
// console.log("11");
// console.log("12");

/*
1
10
11
12
Saket Sharma: +91 9977228977
Saket Sharma: +91 6260988375Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
Hey There, Saket this side 
*/


//thread size: bydefault --> 4
//max thread? based on how many cpu cores you have.
//for 8 core cpu, 8 threads possible

console.log(os.cpus().length);//12



