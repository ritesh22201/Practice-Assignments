const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = res.headers.authorization;
    
}