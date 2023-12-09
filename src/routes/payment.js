import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import stripePackage from "stripe";
const stripe = stripePackage(process.env.STRIPE_SECRET_TEST);
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

router.post("/payment", async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "test payment",
      payment_method: id,
      confirm: true,
      return_url: "https://yourwebsite.com/success", // Specify your return URL here
      automatic_payment_methods: {
        enabled: true,
        // allow_redirects: "never",
      },
    });
    console.log("payment".payment);
    res.json({
      message: "payment successful",
      success: true,
      data: payment,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "payment faild",
      success: false,
    });
  }
});

export default router;
