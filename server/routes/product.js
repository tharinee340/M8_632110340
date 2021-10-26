const router = require("express").Router();
const { verifyTokenAndAuthen , verifyToken, verifyTokenAndAdmin } = require('./verifyToken')
const { addProduct, updateProduct, deleteProduct, getProduct, getAllProduct } = require('../controllers/product.controller')

router.post('/add', verifyTokenAndAdmin, addProduct)
router.put('/update/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/delete/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/find/:id', verifyTokenAndAdmin, getProduct)
router.get('/findAll', verifyTokenAndAdmin, getAllProduct)

module.exports = router