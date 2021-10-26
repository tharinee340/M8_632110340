const router = require('express').Router();
const admin = require('./admin')
const auth = require('./auth')
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const order = require('./order')

router.use("/admin",admin)
router.use("/auth", auth)
router.use("/user", user)
router.use("/product", product)
router.use("/cart", cart)
router.use("/order", order)

module.exports = router;