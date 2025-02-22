const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectMongoDb = async (url) => {
  try {
    const connectionInstant = await mongoose.connect(url,{
      dbName: DB_NAME,
    });
    console.log("Mongodb connected Successfully", mongoose.connection.db.databaseName);
    console.log(`HOST: ${connectionInstant.connection.host}`);
  } catch (err) {
    console.error(`Mongoodb connection ERROR:`, err);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
