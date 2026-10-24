const http = require("http");
const fs = require("fs");

//yaha pe hum ek log maintain krenge jo user ki info rakhega sve.
const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} New Request Received! \n `
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break;
            case '/about': res.end("I am Saket Sharma");
            break;
            default: 
                res.end('404 Not Found');
        }
        // res.end("Hello from server again!");
    });

})

myServer.listen(8000, () => console.log("Server Started!"));

//hum crrate server ke andar ek request handler dete hai, jo ki req res ko handle krta hai through a callback function.

//agar tum parallel requests ko support krna chahte ho toh akways use non-blocking requests only.
//as blockig reuqests use krne se hum after a time apne thread pool ke limited threads ko fulfil krr sakte hai uske baad aaghe ke requests need to wait.
//so, it is prefereble to use non-blocking if we have multiple lined-up tasks.

//res.end mei hum html bi pass krr sakte hai, usko server side rendering bolte hai.