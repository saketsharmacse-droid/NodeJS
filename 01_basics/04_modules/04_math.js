// console.log(add(2,5)); --> sirf yeh likhne se error dega
//we need to import the module from 04_modules.js

const math = require("./04_modules")
//yeh line is same as cpp aur c ka #include and java ka import statement
// ./ means meri current working directory
//add function is out custom module

//hum similar methods aur functions ko club krne ke liye dusri files mei tod sakte hai ek bade se codebase ko.
//based on usecase and similarity, ek poore se code file mei kitte saare codes rhte hai, hum log unko chote chote modules mei break krr sakte hai into different files.

// console.log(add(4,7))
//yeh abhi bhi nhi chlega, as humein module ko export bhi krna padegs

//console.log(add)
//yeh ek empty object dega {}

// console.log("Math value is :" + math) 
// // Hello Saket Sharma
// // sum is: 10
// // Math value is :saket

// console.log(add(2,5)); --> error dega

// console.log(math(3,4)); //7
// //-1 de rha tha for module.exports = sub;

console.log(math.addFn(3,4)); //7
console.log(math.subFn(3,4)); //2

// console.log(math.add(4,5)); 
//yeh valid rhta for:
// module.exports = {
//     add,
//     sub
// }

// //hum destructuring bhi kar sakte hai:
// const { addFn, sub} = require("./04_modules")
// //this way we can directly use the add and sub methods

//require function js mei nhi rjta hai node mei rhta hai sirf.

//node jsmei builtin packages rhte hai
const bp = require("http") //--> used to create web servers
const b1p = require("fs") //--> used in file handling

//directly likhne se it'll look into the node dirctory for packages
// ./ use krne se wo current directory mei dekhega for packages

const b2p = require("crypto") //--> for cryptography

console.log(b1p);
/*{
    appendFile: [Function: appendFile],
    appendFileSync: [Function: appendFileSync],
    access: [Function: access],
    accessSync: [Function: accessSync],
    chown: [Function: chown],
    chownSync: [Function: chownSync],
    chmod: [Function: chmod],
    chmodSync: [Function: chmodSync],
    close: [Function: close],
    closeSync: [Function: closeSync],
    copyFile: [Function: copyFile],
    copyFileSync: [Function: copyFileSync],
    cp: [Function: cp],
    cpSync: [Function: cpSync],
    createReadStream: [Function: createReadStream],
    createWriteStream: [Function: createWriteStream],
    exists: [Function: exists],
    existsSync: [Function: existsSync],
    fchown: [Function: fchown],
    fchownSync: [Function: fchownSync],
    fchmod: [Function: fchmod],
    fchmodSync: [Function: fchmodSync],
    fdatasync: [Function: fdatasync],
    fdatasyncSync: [Function: fdatasyncSync],
    fstat: [Function: fstat],
    fstatSync: [Function: fstatSync],
    fsync: [Function: fsync],
    fsyncSync: [Function: fsyncSync],
    ftruncate: [Function: ftruncate],
    ftruncateSync: [Function: ftruncateSync],
    futimes: [Function: futimes],
    futimesSync: [Function: futimesSync],
    glob: [Function: glob],
    globSync: [Function: globSync],
    lchown: [Function: lchown],
    lchownSync: [Function: lchownSync],
    lchmod: undefined,
    lchmodSync: undefined,
    link: [Function: link],
    linkSync: [Function: linkSync],
    lstat: [Function: lstat],
    lstatSync: [Function: lstatSync],
    lutimes: [Function: lutimes],
    lutimesSync: [Function: lutimesSync],
    mkdir: [Function: mkdir],
    mkdirSync: [Function: mkdirSync],
    mkdtemp: [Function: mkdtemp],
    mkdtempSync: [Function: mkdtempSync],
    mkdtempDisposableSync: [Function: mkdtempDisposableSync],
    open: [Function: open],
    openSync: [Function: openSync],
    openAsBlob: [Function: openAsBlob],
    readdir: [Function: readdir],
    readdirSync: [Function: readdirSync],
    read: [Function: read],
    readSync: [Function: readSync],
    readv: [Function: readv],
    readvSync: [Function: readvSync],
    readFile: [Function: readFile],
    readFileSync: [Function: readFileSync],
    readlink: [Function: readlink],
    readlinkSync: [Function: readlinkSync],
    realpath: [Function: realpath] { native: [Function (anonymous)] },
    realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
    rename: [Function: rename],
    renameSync: [Function: renameSync],
    rm: [Function: rm],
    rmSync: [Function: rmSync],
    rmdir: [Function: rmdir],
    rmdirSync: [Function: rmdirSync],
    stat: [Function: stat],
    statfs: [Function: statfs],
    statSync: [Function: statSync],
    statfsSync: [Function: statfsSync],
    symlink: [Function: symlink],
    symlinkSync: [Function: symlinkSync],
    truncate: [Function: truncate],
    truncateSync: [Function: truncateSync],
    unwatchFile: [Function: unwatchFile],
    unlink: [Function: unlink],
    unlinkSync: [Function: unlinkSync],
    utimes: [Function: utimes],
    utimesSync: [Function: utimesSync],
    watch: [Function: watch],
    watchFile: [Function: watchFile],
    writeFile: [Function: writeFile],
    writeFileSync: [Function: writeFileSync],
    write: [Function: write],
    writeSync: [Function: writeSync],
    writev: [Function: writev],
    writevSync: [Function: writevSync],
    Dirent: [class Dirent],
    Stats: [Function: deprecated],
    ReadStream: [Getter/Setter],
    WriteStream: [Getter/Setter],
    FileReadStream: [Getter/Setter],
    FileWriteStream: [Getter/Setter],
    Utf8Stream: [Getter],
    _toUnixTimestamp: [Function: toUnixTimestamp],
    Dir: [class Dir],
    opendir: [Function: opendir],
    opendirSync: [Function: opendirSync],
    constants: [Object: null prototype] {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    O_CREAT: 256,
    O_EXCL: 1024,
    UV_FS_O_FILEMAP: 536870912,
    O_TRUNC: 512,
    O_APPEND: 8,
    S_IRUSR: 256,
    S_IWUSR: 128,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
    },
    promises: [Getter]
  */






