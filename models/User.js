const mongoose = require("mongoose") ; 

const {Schema,model} = mongoose ;

const UserSchema = new Schema ({

    name: {type: String , required : true} ,
    email : {type:String , required:true} ,
    password : {type:String , required:true},
    phone : Number ,
    role: {type: Number,
        default: 0
    },
})


module.exports = User = model("user" , UserSchema)