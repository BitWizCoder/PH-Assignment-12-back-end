import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  reviewer_name: String,
  reviewer_image: String,
  agent_name: String,
  review_description: String,
  property_title: String,
  review_date: String,
  propertyID: String,
  reviewer_email: String,
});

const Review = model("Review", reviewSchema);

export default Review;
