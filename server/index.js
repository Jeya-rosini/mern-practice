import express from "express";
import appRouter from "./routers/heros.js";

const app = express();
const SERVER_PORT = 1234;

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
