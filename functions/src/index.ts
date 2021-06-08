const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Iwu4lF2xYJmZfQpm6kn3zsJh3p9NLeDbdDD48mlTMYFCcwZnDbq3Xj1PlJF3I845QP9Kz5SFcbWkKUIdJNXWftM00b0rOUiaq"
);

// API

// App config
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middlewares
// app.use(cors({ origin: true }));
app.use(cors());
// app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// API routes
app.get("/", (req: any, res: any) => {
  return res.status(200).send("Home route");
});
app.get("/new", (req: any, res: any) =>
  res.status(200).send("New route, please change")
);

app.post("/payments/create", async (req: any, res: any) => {
  const total = await req.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-e6dc4/us-central1/api
