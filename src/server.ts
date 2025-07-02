import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

mongoose.connect(process.env.MONGO_URL as string, {})
.then(() => {
  console.log("MongoDB connection succeed!");
  const PORT = process.env.PORT ?? 3003;
  app.listen(PORT, function(){
    console.info(`The server is running successfully on ${PORT}`);
    console.info(`Admin project is on http://localhost:${PORT}/admin \n`);
  })
})
.catch(err => {
  console.log("Error on connection mongoDB:", err);
});
