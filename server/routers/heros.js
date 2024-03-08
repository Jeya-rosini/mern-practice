import express from "express";
import { createFantasyCharModel } from "../models/user-request.js";
const appRouter = express.Router();

appRouter.get("/", (req, res) => {
    // res.send("Hello World !");
    res.json([
      {
        name: "Captain Jack Sparrow",
        location: "England",
      },
      {
        name: "Iron Man",
        location: "New York",
      },
    ]);
  });

appRouter.post('/create', async (req, res) => {

  const reqValue = { ...req.body, updated_at: Date.now() };
  const postedData = await createFantasyCharModel(reqValue);
  console.log(postedData);
  return res.json(reqValue);
})


export default appRouter