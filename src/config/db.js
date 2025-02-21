const mongoose = require('mongoose');

const connectMongoDb = async(url)=>{
    try{
        const connectionInstant = await mongoose.connect(url)
    }catch(err){
        console.log(`Mongoodb connection ERROR:`,err);
    }
}