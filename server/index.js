import express from "express";
import appRouter from "./routers/heros.js";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";

const app = express();
const SERVER_PORT = 1234;
dotenv.config();

app.use(express.json())
app.use(appRouter)



app.get('*', (req, res) => {
  res.json({
      "success": false,
      "message":"404 Error found! The page in not available"
  })
})



app.listen(SERVER_PORT, () => {
  console.log(`The server is http://localhost:${SERVER_PORT}`);
});

if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("The connection is succeed");
  } catch (error) {
    console.log(`The connection failed`, error);
  }
}
else {
 console.error("The env is not set") 
}