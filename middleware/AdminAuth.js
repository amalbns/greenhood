const jwt = require("jsonwebtoken") ;
const Admin = require("../models/Admin")


const AdminAuth = async (req, res , next ) => {
    try {
        const token = req.headers["authorization"];
        if(!token){
            return res.status(401).send({errors:[{msg : 'Not Authorized 1 '}]})
        }
        const decoded = jwt.verify(token , process.env.SECRET_KEY)
        const foundAdmin= await Admin.findOne({_id: decoded.id})
        if (!foundAdmin) {
            return res.status(401).send({errors:[{msg : 'Not Authorized 2'}]})
        }
        req.admin = foundAdmin
        next()

    } catch (error) {
        return res.status(401).send({errors:[{msg : 'Not Authorized 3'}]})
        
    }
}


module.exports = AdminAuth