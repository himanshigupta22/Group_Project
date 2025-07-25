const { signup, login ,data} = require('../controller/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');

const router = require('express').Router();

// router.post('/login',(req,res)=>{
//     res.send("login success")
// })

// router.post('/signup',(req,res)=>{
//     res.send("signup success")
// })

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)
router.post('/user', data)


module.exports = router