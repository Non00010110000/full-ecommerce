import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
