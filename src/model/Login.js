import mongoose from "mongoose";

const { Schema, model } = mongoose;

const loginSchema = new Schema({
  name: String,
  email: String,
  photourl: String,
  userRole: String,
});

const userData = model("userData", loginSchema);

export default userData;
