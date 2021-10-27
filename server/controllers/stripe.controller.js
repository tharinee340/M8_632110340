const stripe = require('stripe')(process.env.STRIPE_KEY)

module.exports = {
    payment: async (req,res) => {
        await stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }, (stripeErr, stripeRes) => {
            if(stripeErr) {
                res.status(500).json(stripeErr)
            } else {
                res.status(200).json(stripeRes)
            }
        })
    }
}