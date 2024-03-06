import express from "express";
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

appRouter.post('/create', (req, res) => {

  const reqValue = {...req.body, updated_at: Date.now()};
  return res.json(reqValue);
})


export default appRouter