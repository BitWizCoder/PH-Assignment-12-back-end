import express from "express";
import Review from "../model/Review.js";

const router = express.Router();

// Get review
router.get("/api/reviews", async (req, res) => {
  const review = await Review.find();
  res.send(review);
});

// Get a Single review with email
router.get("/api/reviews/email/:email", async (req, res) => {
  const { email } = req.params;
  const review = await Review.find({ reviewer_email: email });
  res.send(review);
});

// Get a Single review based on propertyID field
router.get("/api/reviews/property/:propertyID", async (req, res) => {
  const { propertyID } = req.params;
  const review = await Review.find({ propertyID });
  res.send(review);
}); 

// Add review
router.post("/api/reviews", async (req, res) => {
  const data = req.body;
  const result = await Review.create(data);
  res.send(result);
});

// delete review
router.delete("/api/reviews/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await Review.findByIdAndDelete(id);
  res.send({ Review: deletedReview });
});

export default router;
