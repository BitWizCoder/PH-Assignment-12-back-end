import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import indexRoute from "./src/routes/indexRoute.js";
import tempData from "./src/routes/tempData.js";
import loginRoute from "./src/routes/loginRoute.js";
import mangeUsers from "./src/routes/admin/manageUsers.js";
import Property from "./src/routes/agent/property.js";
import Payment from "./src/routes/payment.js";
import jwt from "./src/routes/jwt.js";

dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import review from "./src/routes/review.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Cors setings
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://assingment-12-ph.netlify.app"
  // );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mounting the routes
app.use("/", indexRoute);
app.use("/", tempData);
app.use("/", loginRoute);
app.use("/", jwt);
app.use("/", mangeUsers);
app.use("/", Property);
app.use("/", Payment);
app.use("/", review);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
