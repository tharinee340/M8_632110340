const router = require('express').Router();
const admin = require('./admin')
const auth = require('./auth')

router.use("/admin",admin)
router.use("/auth", auth)


module.exports = router;