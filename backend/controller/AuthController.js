const { userModel } = require("../models/user");
const becrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(req.body)
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "user already exist LOGIN", success: false })
        }
        // userModel.create({email,name,password})

        // password = await becrypt.hash(password, 10) //salt =10
        const userdb = new userModel({ name, email, password });
        // const userModel = new userModel({ name:name, email:email, password:password });
        // console.log(userModel);
        userdb.password = await becrypt.hash(password, 10) //salt =10
        await userdb.save();
        res.status(201).json({ message: " Sign Up success", success: true })
    } catch (err) {
        res.status(500).json({ message: "Internal server erroR ", success: false, err })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body)
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "user not found", success: false })
        }

        // const passwd_entered= await becrypt.hash(password, 10);
        // if(passwd_entered !=password) res.send(" password do not match");
        // res.send({user,password,email});
        const isPassEqual = await becrypt.compare(password, user.password);
        if (!isPassEqual) return res.status(403).json({ message: "password not matched ", success: false })

        const token = jwtToken.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_Secret,
            { expiresIn: '2h' }
        );
        // console.log(token)

        // res.status(201).json({ message: "login success", success: true })
        res.status(201).json({ message: "login success", success: true, name: user.name, email, token ,id:user._id})



    } catch (err) {
        res.status(500).json({ message: "Internal server erroR ", success: false, err })
    }
}

module.exports = { signup, login }