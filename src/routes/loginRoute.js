import express from "express";
import loginData from "../model/Login.js";

const router = express.Router();

// Post login userData
router.post("/api/auth/user", async (req, res) => {
  const query = { email: req.body.email };
  const existingUser = await loginData.findOne(query);

  if (existingUser) {
    return res.send({ message: "already exist", insertedId: null });
  }

  const result = await loginData.create(req.body);

  console.log(result);

  res.send({ result });
});

// Update userData
router.put("/api/auth/user/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  try {
    const user = await loginData.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    res.send({ user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
});

export default router;
