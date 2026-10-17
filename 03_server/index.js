//sabse phle humein ek http server bnana hai, uske liye node js ka  builtin package use krenge:
const { log } = require("console");
const http = require("http");

const myServer = http.createServer((req,res) => {
        console.log("New Request Received");
        res.end("Hello from server!")
        
});

myServer.listen(8000, () => console.log("Server Started"));