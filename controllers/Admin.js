const Admin = require("../models/Admin");
const bcrypt = require ('bcrypt') ;
const jwt = require("jsonwebtoken")





exports.register = async (req , res ) => {
    try {
        const { name,email,password,phone  } = req.body ;
        const foundAdmin = await Admin.findOne({email})
        if (foundAdmin) {
            return res.status(400).send({errors: [{ msg: "Email should be Unique "}]})
        }
        const saltRounds = 10 ;

        const hashedPassword = await bcrypt.hash(password,saltRounds)
        
        
        const newAdmin = new Admin ({...req.body})

        newAdmin.password = hashedPassword ;
        
        await newAdmin.save() 

        const token = jwt.sign(
            {
                id: newAdmin._id
            } , 
            process.env.SECRET_KEY,
            {expiresIn : "24h"}
        )
        res.status(200).send({msg:'Admin register successfully..' , admin : newAdmin, token})

    } catch (error) {
        res.status(400).send({errors: [{msg : "Admin can not register ! "}]})
        
    }
}

exports.login = async (req , res ) => {
    try {
        const {email , password} = req.body ;
        const foundAdmin = await Admin.findOne({email})
        if (!foundAdmin) {
            return res.status(400).send({errors: [{ msg: "We could not find matching credentials "}]})

        }
        const checkPassword = await bcrypt.compare(password , foundAdmin.password)
        if (!checkPassword) {
            return res.status(400).send({errors: [{ msg: "We could not find matching credentials "}]})

        }
        const token = jwt.sign(
            {
                id: foundAdmin._id
            } , 
            process.env.SECRET_KEY,
            {expiresIn : "24h"}
        )
        res.status(200).send({msg:" Admin Login Successfully ... ", admin :foundAdmin , token})
    } catch (error) {
        res.status(400).send({errors: [{msg : "can not login !"}]})
        
    }
}
