// db.js
import mongoose from 'mongoose';

let cachedDb = null;

const connectDB = async () => {

  if(cachedDb ){
    return cachedDb
  }

  try {
    const db =  await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    cachedDb = db;
    return db;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
