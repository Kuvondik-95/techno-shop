import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import server from "./app";

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
  console.log("MongoDB connection succeed!");
  const PORT = process.env.PORT ?? 3003;
  server.listen(PORT, function(){
    console.info(`The server is running successfully on ${PORT}`);
    console.info(`Admin project is on http://localhost:${PORT}/admin \n`);
  })
})
.catch(err => {
  console.log("Error on connection mongoDB:", err);
});
