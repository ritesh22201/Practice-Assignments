const jwt = require("jsonwebtoken");
const key = process.env.secretKey;
const BlacklistUser = require("../models/blackListModels");

const auth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
 
    if (!token) {
        res.status(400).send({ message: 'Access token not found' });
    }

    const isTokenBlacklisted = await BlacklistUser.findOne({ token });
    if (isTokenBlacklisted) {
        res.status(400).send({ message: 'Token revoked' });
    }

    jwt.verify(token, key, async (err, decoded) => {
        if(err) {
            res.status(400).send({ message: 'Invalid token'});
        }
        else{
            next();
        }
    })
}

module.exports = auth;