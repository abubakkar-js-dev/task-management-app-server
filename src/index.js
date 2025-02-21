require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

const taskRouter = require('./routes/tasks');
const userRouter = require('./routes/users');



// middlewares

app.use(cors());
app.use(express.json());


// database connection

connectMongoDb(process.env.MONGODB_URL);


// api routes
app.use('/tasks',taskRouter);
app.use('/users',userRouter);





app.get('/',(req,res)=>{
    console.log('The server is Running.');
    res.send('The server is working now');
})

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`);
})