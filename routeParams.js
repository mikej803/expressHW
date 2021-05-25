

// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL

// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc..




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

// app.get('/greet/:Kennedy', (request, response)=>{

//     let name = request.params;
//     console.log(name);

    
//     response.send(`Hello${name}! `)

// })
// app.get('/greet/:Jamison', (request, response)=>{

//     let name = request.params;
//     console.log(name);

    
//     response.send(`Hello${name} ! `)

// })
app.get('/greet/:name', (request, response)=>{

    let userName = request.params.name
    console.log(`Hello${userName}`);

    
    response.send(`<h1>Hello ${userName}!</h1> `)

})



app.listen(port, ()=>{
    console.log(`Server is running off of port ${port}`);
})