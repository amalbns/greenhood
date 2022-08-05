const mongoose = require("mongoose") ; 

const Schema = mongoose.Schema 

const orderSchema = new Schema({

    fullName: {
        type: String,
        trim: true,
        required: true,
        
        },

        fullAdress: {
            type: String,
            required: true,
        
        },
        phone: {
            type: Number,
            trim: true,
            required: true,
        
        },
        email: {
            type: String,
        
            required: true,
        },
        id_user: { 
            type: Schema.Types.ObjectId, 
            ref:'user' , 
            required:true,}
    
    
    
})
module.exports = Order = mongoose.model ('order', orderSchema)
