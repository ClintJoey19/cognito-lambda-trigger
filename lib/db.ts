import mongoose from "mongoose";

let isConnected = false;
const MONGO_URI = process.env.MONGO_URI as string;

const connectToDB = async () => {
  try {
    if (isConnected) return console.log("MongoDB is already connected");

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDB;
