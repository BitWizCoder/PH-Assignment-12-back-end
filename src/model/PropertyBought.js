import mongoose from "mongoose";

const { Schema, model } = mongoose;

const propertyBoughtSchema = new Schema({
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
  amount: Number,
  status: String,
  email: String,
  propertyID: String,
  transactionID: String,
});

const PropertyBought = model("PropertyBought", propertyBoughtSchema);

export default PropertyBought;
