const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectMongoDb = async (url) => {
  try {
    const connectionString = `${url}/${DB_NAME}`;
    const connectionInstant = await mongoose.connect(connectionString);
    console.log("Mongodb connected Successfully");
    console.log(`HOST: ${connectionInstant.connection.host}`);
  } catch (err) {
    console.error(`Mongoodb connection ERROR:`, err);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
