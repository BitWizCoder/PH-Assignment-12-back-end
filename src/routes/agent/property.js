import express from "express";
import Property from "../../model/Property.js";
import Wishlist from "../../model/Wishlist.js";
import PropertyBought from "../../model/PropertyBought.js";
// import verifyToken from "../../middleware/verifyToken.js";

const router = express.Router();

// Get Property
router.get("/api/properties", async (req, res) => {
  const property = await Property.find();
  res.send(property);
});

// Get a Single property
router.get("/api/properties/:id", async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.send(property);
});

// Get a Single property based on status
router.get("/api/properties/status/:status", async (req, res) => {
  const { status } = req.params;
  const property = await Property.find({ verification_status: status });
  res.send(property);
});

// Add Property
router.post("/api/properties", async (req, res) => {
  const data = req.body;
  const reseult = await Property.create(data);
  res.send(reseult);
});

// Update Property
router.put("/api/properties/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProperty = req.body;
  const reseult = await Property.findByIdAndUpdate(id, updatedProperty, {
    new: true,
  });
  res.send({ Property: reseult });
});

// Delete Property
router.delete("/api/properties/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProperty = await Property.findByIdAndDelete(id);
  res.send({ Property: deletedProperty });
});

// Add to wishlist
router.post("/api/wishlist", async (req, res) => {
  const data = req.body;
  const result = await Wishlist.create(data);
  res.send({ result });
});

// Get wishlist
router.get("/api/wishlist", async (req, res) => {
  const wishlist = await Wishlist.find();
  res.send({ wishlist });
});

// Get wishlist by email
// router.get("/api/wishlist/:email", async (req, res) => {
//   const { email } = req.params;
//   const filter = { email: email };
//   const wishlist = await Wishlist.find(filter);
//   res.send({ wishlist });
// });

// Get wishlist by id
router.get("/api/wishlist/:id", async (req, res) => {
  const { id } = req.params;
  const wishlist = await Wishlist.findOne({ _id: id });
  res.send(wishlist);
});

// Delete wishlist
router.delete("/api/wishlist/:id", async (req, res) => {
  const { id } = req.params;
  const deletedWishlist = await Wishlist.findByIdAndDelete(id);
  res.send({ Wishlist: deletedWishlist });
});

// Add Bought Property
router.post("/api/bought", async (req, res) => {
  const data = req.body;
  const reseult = await PropertyBought.create(data);
  res.send({ Property: reseult });
});

// Get Bought Property
router.get("/api/bought", async (req, res) => {
  const property = await PropertyBought.find();
  res.send(property);
});

// Get a Single Bought Property based on status
router.get("/api/bought/:status", async (req, res) => {
  const { status } = req.params;
  const property = await PropertyBought.find({ status: status });
  res.send(property);
});

// Update Bought Property
router.put("/api/bought/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProperty = req.body;
  const reseult = await PropertyBought.findByIdAndUpdate(id, updatedProperty, {
    new: true,
  });
  res.send({ Property: reseult });
});

export default router;
