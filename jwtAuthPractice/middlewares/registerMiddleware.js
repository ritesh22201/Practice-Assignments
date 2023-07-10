const UserModel = require("../models/userModel");

const registerMid = async(req, res, next) => {
    const {email, pass} = req.body;

    if(pass.length < 8){
        return res.status(400).send({'msg' : 'Password must be at least of 8 characters'});
    }

    if(!/\d/.test(pass)){
        return res.status(400).send({'msg' : 'Password must contain at least one number'});
    }

    if(!/[!@#$%&]/.test(pass)){
        return res.status(400).send({'msg' : 'Password must contain at least one special character'});
    }

    if(!/[A-Z]/.test(pass)){
        return res.status(400).send({'msg' : 'Password must contain at least one uppercase character'});
    }

    const existUser = await UserModel.findOne({email});
    if(existUser){
        return res.status(400).send({'msg' : 'User already registered'});
    }

    next();
}

module.exports = registerMid;