const express = require('express');

const app = express();

app.get('/', (req, res)=>res.send(sayHi()))


app.listen(3000, ()=>{
    console.log('listening on 3000')
})

/**
 * 
 * @param {[type]} message 
 * @returns {string}
 */
function sayHi(message){
    return message || `Hello at ${new Date().toISOString()}`
}