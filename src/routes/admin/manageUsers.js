import express from "express";
import userData from "../../model/Login.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await userData.find();
  res.send(users );
});

// update user based on userRole field
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { userRole } = req.body;

  try {
    const user = await userData.findByIdAndUpdate(
      id,
      { userRole },
      { new: true }
    );
    res.send({ User: user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
});

export default router;
