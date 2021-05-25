

// Make an express program that will display "Hello, world!" at the root URL: /

const express = require('express');

const app = express();

let port = 3000


app.get('/', (request, response)=>{

    response.send(`<h1>Hello World</h1>`)

})



app.listen(port, ()=>{
    console.log(`Server is running off of port ${port}`);
})