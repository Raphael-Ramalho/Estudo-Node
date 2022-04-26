const fs = require('fs')

// //Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// const textOut = `This is what we know about the avocato ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log("File written!")

//Non-blocking, Asyncronous way
fs.readFile("./txt/start.txt","utf-8", (err, data)=>{
    console.log(data)
})
console.log("Will read file!")



