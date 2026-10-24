const http = require("http");
const url = require("url");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received! \n`;

    // console.log("req.url =", req.url);
    // console.log("req.method =", req.method);        
    const myUrl = url.parse(req.url. true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case '/': res.end("HomePage");
            break;
            case '/about': 
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
            break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("here are yor results for " + search);
            break;
            default:
                res.end("404 not found");
        }
    })
})


myServer.listen(8000, () => console.log("Server Started"));

//basically : server takes the request of user, parses the url, database mei se response ko leke user ko laake