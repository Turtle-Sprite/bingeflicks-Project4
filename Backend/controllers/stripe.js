const express = require("express")
const Stripe = require("stripe")

require("dotenv").config()
const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

//POST request comes from the PayButton component
router.post('/create-checkout-session', async (req, res) => {
  console.log("POST Pay button", req.body.cartItems)
  //maps through checkout items sent with the POST request
  const line_items = req.body.cartItems.map(item => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.desc,
          metadata: {
            id: item.id
          }
        },
        unit_amount: item.price,
      },
      quantity: item.cartQuantity,
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

  res.send({ url: session.url });
});

module.exports = router