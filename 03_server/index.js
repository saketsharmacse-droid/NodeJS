//sabse phle humein ek http server bnana hai, uske liye node js ka  builtin package use krenge:
const { log } = require("console");
const http = require("http");

const myServer = http.createServer((req,res) => {
        // console.log("New Request Received");
        // console.log(req.headers);
        console.log(req);

        
        res.end("Hello from server!")
        
});

myServer.listen(8000, () => console.log("Server Started"));
//PS C:\Users\hp\OneDrive\Desktop\NodeCore\03_server> node index
// Server Started
// New Request Received
// New Request Received


//req.headers);
// PS C:\Users\hp\OneDrive\Desktop\NodeCore\03_server> node index
// Server Started
// {
//   host: 'localhost:8000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'sec-ch-ua': '"Google Chrome";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
//   'sec-ch-ua-mobile': '?0',
//   'sec-ch-ua-platform': '"Windows"',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br, zstd',
//   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
// }
// {
//   host: 'localhost:8000',
//   connection: 'keep-alive',
//   'sec-ch-ua-platform': '"Windows"',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36',
//   'sec-ch-ua': '"Google Chrome";v="155", "Chromium";v="155", "Not(A:Brand";v="24"',
//   'sec-ch-ua-mobile': '?0',
//   accept: 'image/jxl,image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
//   'sec-fetch-site': 'same-origin',
//   'sec-fetch-mode': 'no-cors',
//   'sec-fetch-dest': 'image',
//   referer: 'http://localhost:8000/',
//   'accept-encoding': 'gzip, deflate, br, zstd',
//   'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
// }
