const router = require('express').Router();
const { show, add, update, deleteBook} = require('../controllers/admin.controller');

router.get("/getBook", show)
router.post("/addBook", add)
router.put("/updateBook/:id", update)
router.delete("/deleteBook", deleteBook)

module.exports = router