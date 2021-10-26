const router = require("express").Router();
const User2 = require("../models/user2");
const { verifyTokenAndAuthen , verifyToken } = require('./verifyToken')

//UPDATE
router.put("/:id", verifyTokenAndAuthen, async (req, res) => {
    if (req.body.password) {
        const user = await User2.findOne({ _id: req.params.id });
        req.body.password = await bcrypt.compareSync(password, user.password);
    }
    try {
        const updateUser = await User2.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true }
        )
        res.status(200).json(updateUser)

    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router