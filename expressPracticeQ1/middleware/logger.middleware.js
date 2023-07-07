const fs = require("fs");
const express = require("express");
const { url } = require("inspector");

const logger = (req,res,next)=>{
    fs.appendFileSync("logs.txt",`Method:${req.method}, Route:${req.url}, user-agent:${req.headers["user-agent"]}\n`);
    console.log("logger working")
    next()
}
// "Method:GET, Route:/, user-agent:PostmanRuntime/7.31.1"
module.exports = { logger }