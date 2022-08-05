
const Product = require("../models/Product");

    
    
    exports.addProduct = async(req , res) => {
        const{name,description,price,category} = req.body ;
        let image=""
        if(req.file){
        image= req.file.filename
    }
        try {
            
            

            const newProduct =  new Product ({ name,description,price,category,id_admin:req.admin._id,image})
            await newProduct.save();
            res.status(200).send({msg:"Product added succ .." , newProduct})
        } catch (error) {
            res.status(400).send({msg:" Can not add Product !!!", error})
            
        }
    }
    
    
    exports.getProducts = async (req ,res)=> {
        try {
            const listProducts = await Product.find()
            res.status(200).send({msg:"list contacts ", listProducts})
        } catch (error) {
            req.status(400).send({msg:"Cannot get all products" ,error}) 
            
        }
    }
    
    
    exports.getOneProduct =async (req,res)=> {
        try {
            const productToGet = await Product.findOne({_id: req.params.id})
            res.status(200).send({msg:"I get the product.." ,productToGet})
        
        } catch (error) {
            res.status(400).send({msg:"Cannot get the product with this id " , error})
            
        }
    }
    
    exports.deleteProduct =async (req,res) => {
        try {
            const {_id} = req.params
            await Product.findOneAndDelete({_id})
            res.status(200).send ({msg:"Product deleted ..."})
        } catch (error) {
            res.status(400).send ({msg:"Product deleted ..." , error})
    
        }
    }
    
    exports.putProduct = async (req , res)=> {
        try {
            const {_id} = req.params;
            const result = await Product.updateOne({_id}, {$set:{...req.body}})
            res.status(200).send({msg:"Product Updated..."})
        } catch (error) {
            res.status(400).send({msg:"Product cannot Update" , error})
            
        }
    }
    
    