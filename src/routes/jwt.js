import express from "express";
import jwt from "jsonwebtoken";
import loginData from "../model/Login.js";

const router = express.Router();

// Create jwt token
router.post("/jwt", async (req, res) => {
  const token = jwt.sign(req.body, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json(token);
});

// Get User role
router.post("/user", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await loginData.findOne({ email: email });

    if (user) {
      // console.log(user.userRole);
      res.send(user.userRole);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving user data");
  }
});

export default router;
