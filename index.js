const express = require('express');
const app = express();
const port = 3000;

//Serve static files form the "public" folder
app.use(express.static('public'));

// Define a route for the home page 
    app.get('/About', (req,res)=>{
        res.send('About us');
    });

app.use(express.json());//Middleware

app.post('/submit', (req,res)=>{
    const data = req.body;
    res.send(`Receivced: ${JSON.stringify(data)}`)
});
//Start the server
app.listen(port,()=>{
    console.log (`Server running at http://localhost:${port}`);

});


