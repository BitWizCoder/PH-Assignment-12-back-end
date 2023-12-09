import express from "express";
import Property from "../model/Property.js";
import Review from "../model/Review.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Get user
// router.get("/users", async (req, res) => {
//   const users = await Users.find();
//   res.send({ Users: users });
// });

// Add Property
router.post("/property", async (req, res) => {
  const reseult = await Property.insertMany(wislistData);
  res.send({ Property: reseult });
  console.log(reseult);
});

// Get Property
router.get("/property", verifyToken, async (req, res) => {
  const property = await Property.find();
  res.send({ property });
});

// Get a Single property
router.get("/property/:id", async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.send({ property });
});

// Add review
router.post("/review", async (req, res) => {
  const reseult = await Review.insertMany(reviewData);
  res.send({ Review: reseult });
  console.log(reseult);
});

// Get review
router.get("/review", async (req, res) => {
  const reviews = await Review.find();
  res.send({ reviews });
});

export default router;
