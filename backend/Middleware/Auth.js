const jwt = require('jsonwebtoken')

const ensureAuthenticated = (req, res,next) => {
    const auth = req.headers['authorization']  // Get the token part
    console.log(typeof auth)

    if (!auth) {
        return res.status(403)
            .json({ message: "Unauthorized access , JWT required " });
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_Secret);
        req.user = decoded;
        // console.log("ToKEn ", auth)
        next();
        // console.log("Heyy")
    } catch (err) {
        // console.log("error")
        // return res.status(403).json({ message: " Expired JWT Token " })
        console.log("JWT Error:", err.name, "-", err.message);
        return res.status(403).json({ message: "Expired or Invalid JWT Token", error: err.message });

    }
}

module.exports = ensureAuthenticated