import mongoose from "mongoose";

const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
  image: String,
  title: String,
  location: String,
  agent: {
    name: String,
    image: String,
  },
  verification_status: String,
  price_range_lowest: Number,
  price_range_highest: Number,
  byer_name: String,
  email: String,
  propertyID: String,
});

const Wishlist = model("Wishlist", wishlistSchema);

export default Wishlist;
