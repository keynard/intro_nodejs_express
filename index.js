const express = require('express');
const app = express();
const port = 3000;

//Serve static files form the "public" folder
app.use(express.static('public'));

// Define a route for the home page 
    app.get('/About', (req,res)=>{
        res.send('About us');
    });


app.use((req, res,next)=>{
    console.log(`${req.method}${req.url}`);
    next();
});


app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use(express.json());//Middleware

app.post('/submit', (req,res)=>{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});
//Start the server
app.listen(port,()=>{
    console.log (`Server running at http://localhost:${port}`);

});


const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res)=>{
    res.json(items);
});

app.post('/items', (req, res)=>{
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});