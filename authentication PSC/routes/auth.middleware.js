const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'masai', (err, decoded) => {
        if (decoded) {
            next();
        }
        else {
            res.status(400).send('Invalid token!!');
        }
    })
}