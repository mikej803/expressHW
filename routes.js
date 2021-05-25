

//Add to your program the following pages:

// "Meow" at the URL /cats "Woof" at the URL /dogs "Living together" at the URL /cats_and_dogs




const express = require('express');

const app = express();

let port = 3000


app.get('/cats', (request, response)=>{

    response.send('meow')

})

app.get('/dogs', (request, response)=>{

    response.send('woof')

})

app.get('/cats_and_dogs', (request, response)=>{

    response.send('living together')

})



app.listen(port, ()=>{
    console.log(`Server is running off of port ${port}`);
})