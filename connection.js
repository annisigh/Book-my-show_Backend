require("dotenv").config();
const mongoose = require("mongoose");

// Obtains the MongoDB connection string from the environment variable MONGODB_URI.
const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    // Connecting to database using connection string and specifying if there is any error or it was successful.
    await mongoose.connect(mongoURI);
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
    // Handle error appropriately, e.g., throw error or exit process
    process.exit(1);
  }
};

exports.connection = connectToMongo;
