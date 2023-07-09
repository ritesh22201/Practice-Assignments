const jwt = require('jsonwebtoken');
const blacklist = require('../blacklist');

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(blacklist.includes(token)){
        res.send('Please login again');
    }
    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            next();
        }
        else {
            res.status(400).send('Invalid token!!');
        }
    })
}

module.exports = auth;