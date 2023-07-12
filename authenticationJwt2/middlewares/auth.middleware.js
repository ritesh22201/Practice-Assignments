const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    const {token} = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(400).send({'msg' : 'Token not found'});
    }
    
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
        if(err){
            res.status(400).send({'msg' : 'Invalid token'})
        }
        else{
            req.body.username = decoded.username;
            req.body.userID = decoded.userID;
            next();
        }
    })

}

module.exports = auth;