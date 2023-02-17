const express = require("express")
const Stripe = require("stripe")

require("dotenv").config()
const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

//POST request comes from the PayButton component
router.post('/create-checkout-session', async (req, res) => {
  try {
    console.log("POST Pay button", req.body.cartProducts)
    //maps through checkout items sent with the POST request
    const line_items = req.body.cartProducts.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.movieTitle,
            description: item.movieDescription,
          },
          unit_amount_decimal: item.moviePrice,
        },
        quantity: 1,
      }
    })
    console.log("many items", line_items)
    //sends checkout items to the Stripe DB for a payment. Check stripe account for test payments. 
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.warn(err)
  }
});

module.exports = router