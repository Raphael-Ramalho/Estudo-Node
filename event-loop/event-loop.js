const fs = require('fs')

setImmediate(()=> console.log("Immediate 1 finished"))
setTimeout(()=>console.log("Timer 1 finished"), 0)

fs.readFile('text-file.txt',()=>{
  console.log("I/0 finished")

  setTimeout(()=>console.log("Timer 2 finished"), 0)
  setTimeout(()=>console.log("Timer 3 finished"), 3000)
  setImmediate(()=>console.log("Immediate 2 finished"))

})

console.log("Hello from the top-level code")