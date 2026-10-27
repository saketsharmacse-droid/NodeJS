const http = require("http");
const fs = require("fs");
const url = require("url");

//req.method hota hai jo ki uss http request ka type btayega.

const myServer = http.createServer((req,res) => {
    if (req.url === "/favicon.ico") return res.end;
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case "/":
                // res.end("Home Page");
                if(req.method === 'GET') res.end('HomePage');

                break;
            case "/signup":
                if(req.method === 'GET') res.end('This is a signup form.')
                    else if (req.method === "POST"){
                        //DB query
                    }
                    res.end('Success');
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are yout results for " + search);
            default:
                res.end("404 not found");
        }
    })

})

myServer.listen(8000, () => console.log("Server Started!"));

//homepage pe get request hi bnega mostly
//signup pe post bnega.
//aise way mei toh har ek page/path ke liye har ek conditiion render krna padeg using if else elseif and all, for all the 5 methods.
//har ek switch case bna sakte hai for routes and har ek method ko handle krna padega using if else.

//isliye we have to use an express library, so that humara code structure hamper mat ho , readibility bni rhe.
//this express library will handle all these in a structured manner.

