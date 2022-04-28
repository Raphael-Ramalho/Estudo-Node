const fs = require("fs")
const http = require("http")
const url = require('url')

///////////////////////////////////////
/// FILES

// //Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// const textOut = `This is what we know about the avocato ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log("File written!")

// //Non-blocking, Asyncronous way
// fs.readFile("./txt/start.txt","utf-8", (err, data1)=>{
//     if(err) return console.log("ERROR!")
//     fs.readFile(`./txt/${data1}.txt`,"utf-8", (err, data2)=>{
//         console.log(data2)
//         fs.readFile(`./txt/append.txt`,"utf-8", (err, data3)=>{
//             console.log(data3)

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err=>{
//                 console.log("Your file has been written")
//             })
//         })
//     })
// })
// console.log("Will read file!")

///////////////////////////////////////
/// SERVER

const server = http.createServer((req, res) => {
  const pathName = req.url
  if(pathName === '/overview'){
    res.end("This is the OVERVIEW")
  } else if (pathName === '/product'){
    res.end('This is the PRODUCT')
  } else if (pathName === '/api'){

    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8',(err,data)=>{
      const productData = JSON.parse(data)//parse will transforme a json object into a javascript one
      console.log(productData)
    }) //a variável de ambiente __dirname indica o caminho absolito do diretório contendo o arquivel que está sendo executado

    res.end("API")
  } else {
    res.writeHead(404,{
      'Content-type': 'text/html',
      'my-own-header': 'hello-word'
    })
    res.end("<h1>Page not found!</h1>")
  }
})

server.listen(8000, "127.0.0.2", () => {
  console.log("Listening to requests on port 8000")
})
