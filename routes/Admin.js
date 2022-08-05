const express = require ("express") ;
const { register, login } = require("../controllers/Admin");
const AdminAuth = require("../middleware/AdminAuth");



const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get("/current", AdminAuth ,(req,res) => {
    res.send(req.admin)
})





module.exports =router