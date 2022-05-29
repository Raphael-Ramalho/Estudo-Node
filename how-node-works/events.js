const EventEmitter = require("events")

const myEmitter = new EventEmitter()

//Observers
myEmitter.on("newSale", ()=>{
  console.log('There was a new sale!')
})

myEmitter.on('newSale',()=>{
  console.log('Costumer name: Jonas')
})

myEmitter.on('newSale', stock =>{
  console.log(`There are now ${stock} items left in stock`)
})

//Event emitters
myEmitter.emit("newSale", 9)