const mongoose = require('mongoose');
require('dotenv').config()


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/Robotic', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;