import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline.bold);
};

export default connectDB;
