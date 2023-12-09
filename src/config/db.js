import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const usrname = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const DbName = process.env.DBNAME;

    await mongoose.connect(
      `mongodb+srv://${usrname}:${password}@assinment-12.y4t8sxl.mongodb.net/${DbName}?retryWrites=true&w=majority`
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
