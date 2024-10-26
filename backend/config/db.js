import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
