const mongoose = require("mongoose");
const port =  "27017"
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-commerce");

    console.log(`Db Connected on port ${port}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
