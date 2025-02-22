require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectMongoDb = require('./config/db');
const app = express();
const port = process.env.PORT || 5000;

const taskRouter = require('./routes/tasks');
const userRouter = require('./routes/users');



// middlewares

app.use(cors({
    origin: ['https://task-management-app-client-five.vercel.app','http://localhost:5173',]
}));
app.use(express.json());


// database connection

connectMongoDb(process.env.MONGODB_URL)
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on port: ${port}`);
    })
}).catch((err)=>{
    console.log("Error in connecting to the database",err);
})


// api routes
app.use('/tasks',taskRouter);
app.use('/users',userRouter);





app.get('/',(req,res)=>{
    console.log('The server is Running.');
    res.send('The server is working now');
})
