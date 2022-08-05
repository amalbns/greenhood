const Order = require ('../models/Order') 


exports.addOrder = async(req , res) => {
    try {
        
        const{fullName,fullAdress,phone,email} = req.body ;
        const newOrder =  new Order ({ fullName,fullAdress,phone,email})
        await newOrder.save();
        res.status(200).send({msg:"Order added  .." , newOrder})
    } catch (error) {
        res.status(400).send({msg:" Can not add Order !!!", error})
        
    }
}


exports.getOrders = async (req ,res)=> {
    try {
        const listOrders = await Order.find()
        res.status(200).send({msg:"Orders List.. ", listOrders})
    } catch (error) {
        req.status(400).send({msg:"Cannot get all Orders" ,error}) 
        
    }
}


exports.getOneOrder =async (req,res)=> {
    try {
        const orderToGet = await Order.findOne({_id: req.params.id})
        res.status(200).send({msg:"I get the Order.." , orderToGet})
    
    } catch (error) {
        res.status(400).send({msg:"Cannot get the order with this id " , error})
        
    }
}

exports.deleteOrder =async (req,res) => {
    try {
        const {_id} = req.params
        await Order.findOneAndDelete({_id})
        res.status(200).send ({msg:"Order Deleted..."})
    } catch (error) {
        res.status(400).send ({msg:"Order deleted ..." , error})

    }
}

exports.putOrder = async (req , res)=> {
    try {
        const {_id} = req.params;
        const result = await Order.updateOne({_id}, {$set:{...req.body}})
        res.status(200).send({msg:"Order Updated..."})
    } catch (error) {
        res.status(400).send({msg:"Order  cannot Update" , error})
        
    }
}

