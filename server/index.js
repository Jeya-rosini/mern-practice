import express from "express";
import appRouter from "./routers/heros.js";

const app = express();
const SERVER_PORT = 1234;

app.get("/", (req, res) => {
  // res.send("Hello World !");
  res.json([
    {
      id: "1",
      name: "Captain Jack Sparrow",
      location: "England",
    },
    {
      id: "2",
      name: "Iron Man",
      location: "New York",
    },
  ]);
});

app.use(appRouter)

app.listen(SERVER_PORT, () => {
  console.log(`The server is http://localhost:${SERVER_PORT}`);
});
