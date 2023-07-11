const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, 'bonjo', (err, decoded) => {
            if(decoded){
                next()
            }
            else{
                res.status(400).send({'msg' : 'Please login'});
            }
        })
    }
    else{
        res.status(400).send({'msg' : 'Please login'});
    }
}

module.exports = authenticate;