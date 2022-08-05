
const express = require ("express") ;
const { addOrder, getOrders, getOneOrder, deleteOrder, putOrder } = require("../controllers/order");


const router = express.Router()


router.post('/add', addOrder )

router.get('/all' , getOrders)

router.get('/:id',getOneOrder)

router.delete('/:_id',deleteOrder)

router.put('/:_id' , putOrder)




module.exports =router