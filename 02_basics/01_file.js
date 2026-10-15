//yehe pe file handling discuss krenge
const fs = require("fs");
//file system is a default module of node js, used in file handling.
//fs module is a builtin module inside nodejs, and i can use this to interact with the files.

//file ka naam fs.js nhi rakhna wrna yeh packages mei confuse ho jayega.


//creating a file
//do functions hai: writeFile aur writeFileSync

//Sync call
fs.writeFileSync('./02_basics/test.txt', 'Hey There, I am Learning Node js!')

//Async call
fs.writeFile('./02_basics/test.txt', 'Hello Hello Hello ji from Async! ', (err) => {});
//yeh override krr dega test.txt ko here.

//Difference kya hai synchronous aur asynchronous mei?
//isko bolte hai blocking aur non-blocking request.
//node js architecture aur event loop se samajh aayega.

//reading from a file:
//yaha bhi do types: readFile aur readFileSync

//Sync call
const result = fs.readFileSync('./02_basics/contacts.txt', 'utf-8');
//utf-8 is a standard encoding for the file formats
//isko nhi pta ki binary file hai, txt hai jpeg hai, toh yeh utf-8 ke according padhega isko.
console.log(result);

//synchronous task krr rha hu toh wo mujhe result ko return krr rha hai, if error hua toh wo usko throw krr dega, which we can handle later.

//async call
fs.readFile('./02_basics/contacts.txt', 'utf-8', (err, result) => {
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
})
//async call kich return nhi krta hai, humein callback ke andar print krna rhega.
//yeh humesha ek callback expect krega in arguments



//we can append filesf
//herealso we have two ethods sync and async. 
//as phle mera content overwrite h jaa rha tha
fs.appendFileSync('./02_basics/contacts.txt', `Hey There, Saket this side \n`)

//hum jab webserver bnayenge, tohfs append ke help se ek log file maintain krenge, jisme users ka time aur ip address saved rhega.

fs.cpSync('./02_basics/test.txt', "./02_basics/copy.txt");
//copying a file onto a new file

fs.unlinkSync('./02_basics/copy.txt')
//this will delete the file

console.log(fs.statSync('./02_basics/test.txt'));
//this will return the stats of the file --> statical infosmation about the file.

//there are many more methods and functions under the fs.

//we can create a folder
fs.mkdirSync("my-docs/a/b", { recursive: true});

//we cannot do these under the normal javascrypt.