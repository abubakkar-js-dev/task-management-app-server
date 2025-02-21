require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



// middlewares

app.use(cors());
app.use(express.json());


// database connection




// api routes






app.get('/',(req,res)=>{
    console.log('The server is Running.');
    res.send('The server is working now');
})

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
})