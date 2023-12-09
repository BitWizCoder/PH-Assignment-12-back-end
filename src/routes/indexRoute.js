import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello, World! -- The server is Running.");
});

export default router;
