//yaha pe modules aur packages dekhenge
console.log("Hello Saket Sharma");

//production world mei jab hum aone poore code bases ko chote chote modules mei break krr dete hai usko modular program bolte hai.
function add(a,b){
    return a+b;
}
console.log("sum is: " + add(4,6));

//yeh function iss module ke andar ek private ke trike se rhega.
//we need to export it to make it accessible by other codes through imports, isko public bnana hai.

// module.exports = "saket";
//yeh math likhne pe "saket" dega



function sub(a,b){
    return a-b;
}

// module.exports = add;
// module.exports = sub;
// //yaha pe sub will override the add
// //hum js ke objects use krr sakte hai to export multiple things.

// module.exports = {
//     add,
//     sub
// } //this is also valid

//in a more better way:
module.exports = {
    addFn: add,
    subFn : sub
}
//this is called multi exporting, default export

//other way to export is to use the export function ka object
exports.add = (a,b) => a + b;
exports.sub = (a,b) => a - b;
//yeh krne se exactly same values aayegi.
//yeh dono anonymous functions hai as inka name nhi rhta hai.