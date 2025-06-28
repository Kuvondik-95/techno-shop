import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string, {})
.then(() => {
  console.log("MongoDB connection succeed!");
  const port = process.env.PORT ?? 3003
})
.catch(err => {
  console.log("Error on connection mongoDB:", err);
});
