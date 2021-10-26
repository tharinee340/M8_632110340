const router = require('express').Router();
const admin = require('./admin')
const auth = require('./auth')
const user = require('./user')
const product = require('./product')

router.use("/admin",admin)
router.use("/auth", auth)
router.use("/user", user)
router.use("/product", product)

module.exports = router;