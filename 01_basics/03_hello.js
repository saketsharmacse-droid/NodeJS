console.log("Hey there, I am Saket Sharma");

// PS C:\Users\hp\OneDrive\Desktop\NodeCore> node .\01_basics\03_hello.js
// Hey there, I am Saket Sharma

//we can simply do node hello as well, as node sirf js files hi run krta hai.
//PS C:\Users\hp\OneDrive\Desktop\NodeCore> node .\01_basics\03_hello    
// Hey there, I am Saket Sharma

// console.log(window); --> ReferenceError: window is not defined
// alert("hello") --> ReferenceError: alert is not defined

//node js mei v8 engine ko poora directly embed nhi kiya gya.
//actually mei, dom se related elements, yss window ke elements ko nhi rakha gya.
//dom ka kaam, ui ka kaam ko nhi rakha gya.
//like getelementbyid and all nhi rakha gya.

//toh, poori functionality v8 ki nhi laayi gyi hai node mei, but server side and all jo ki backend ke liye needed hai wo sab present hai.
//npm: jab bhi new peoject bnayenge, toh npm init krna rhega
//npm init ek template bna deta hai for us to run our projects.
//npm creates a file for us to run and build out projects

//questions puchegs: package name, version, author, license, keywords etc
//uske basis pe yeh ek package.json create krega, jo ki ek configuration file hai.
//jo bhi dependencies install krenge, code ko publish krenge jo kuv=ch nhi krenge sab isi conmfiguration ke basis pe hoga.
//hum isko manually bhi bna sakte hai, instead of npm init

//benefits of package.js
//scripts ke andar jaake apna create krr sakte hai:
//like "start": "node hello.js"
//fir terminal pe npm start krne se hi yeh run ho jayega
//humare pass bahut saari js files rhegi in projects, so we need a common running thing
//aur bhi bahut benefits hai, hum external packages use krr sakte hai and what not.

console.log("Hello ji");

