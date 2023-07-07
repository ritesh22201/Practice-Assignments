const fs = require("fs");
const express = require("express")

const validator = (req,res,next)=>{
        if(req.method == "PATCH" || req.method == "DELETE")
        {
            if(req.query.role && req.query.pass)
            {
                if(req.query.role == "leader" && req.query.pass == "4534")
                {
                    next();
                }else{
                    res.status(401).send("You are not authorised to do this operation")
                }
            }else{
                res.status(401).send("You are not authorised to do this operation")
            }
        }else{
            res.status(401).send("You are not authorised to do this operation")
        }
}

module.exports = { validator }