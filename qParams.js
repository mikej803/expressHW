
const express = require('express');

const app = express();

let port = 3000


app.get('/year', (request, response) => {
    console.log(request.query.age);
    let age1 = parseInt(request.query.age)
    let date = new Date()
    let year = date.getFullYear() - age1

    
    


    response.send(`You were born on ${year}`)

})
app.get('*',(request, response)=> {
    response.send('You have reached an error')
})

app.listen(port, ()=>{
    console.log(`Server is running off of port ${port}`);
})