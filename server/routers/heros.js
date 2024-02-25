import express from "express";
const appRouter = express.Router();

appRouter.get('/details', (req, res) => {
   return res.json({
        "details": "welcome, heros"
    })
})

appRouter.get('*', (req, res) => {
    res.json({
        "success": false,
        "message":"404 Error found! The page in not available"
    })
})

export default appRouter