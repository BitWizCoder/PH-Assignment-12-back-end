import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  reviewer_name: String,
  reviewer_image: String,
  review_description: String,
  property_title: String,
  review_date: String,
});

const propertySchema = new Schema({
  image: String,
  title: String,
  location: String,
  agent: {
    name: String,
    email: String,
    image: String,
  },
  verification_status: String,
  price_range_lowest: Number,
  price_range_highest: Number,
  sold: Boolean,
  reviews: [reviewSchema],
});

/* 

_id
reviewer_name
reviewer_image
review_description
property_title
review_date
__v
0

*/

const Property = model("Property", propertySchema);

export default Property;
