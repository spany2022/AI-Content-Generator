const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(403).json({message: "unauthorized, JWT token is required"});
    }

    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(403).json({message: "unauthorized, JWT token is required"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({message: "unauthorized, JWT token is invalid or expired.", error: error});
    }
}

module.exports = ensureAuthenticated;