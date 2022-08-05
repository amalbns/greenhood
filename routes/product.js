
const express = require ("express") ;
const AdminAuth = require ("../middleware/AdminAuth")
const { addProduct, deleteProduct, putProduct, getProducts, getOneProduct } = require("../controllers/product");
const upload = require("../middleware/uploads");


const router = express.Router()


router.post('/add',upload.single("image"),AdminAuth,  addProduct )

router.get('/all' , getProducts)

router.get('/:id',getOneProduct)

router.delete('/:_id',deleteProduct)

router.put('/:_id' , putProduct)




module.exports =router