import mongoose from "mongoose";

// Connecting MongoDB through moongoose
export const connectDB = async (params) => {
  const MONGODB_URI =
    "mongodb+srv://emmanuelmwangi310:Ratchet254@cluster0.hu5nbao.mongodb.net/express";
  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database connected successfully");
  });
};
