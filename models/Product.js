const mongoose = require("mongoose") ; 

const Schema = mongoose.Schema 

const productSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        
        },
        description: {
            type: String,
            required: true,
        
        },
        price: {
            type: Number,
            trim: true,
            required: true,
        
        },
        category: {
            type: String,
        
            required: true,
        },
        id_admin: { 
            type: Schema.Types.ObjectId, 
            ref:'admin' , 
            required:true,} ,
        image: {
            type: String ,
            required : true ,

        },

    

    
})
module.exports = Product = mongoose.model ('product', productSchema)



