const router = require('express').Router();
const admin = require('./admin')
const auth = require('./auth')
const user = require('./user')

router.use("/admin",admin)
router.use("/auth", auth)
router.use("/user", user)

module.exports = router;