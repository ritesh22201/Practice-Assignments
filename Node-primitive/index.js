const fs = require("fs");

// complete the following fubctions

function isNumber(num) {
    if(typeof num == 'number'){
        fs.appendFileSync('./test.txt', 'it is a Number.\n');
    }
    else{
        fs.appendFileSync('./test.txt', 'it is Not a Number.\n');
    }
}

function isStr(str) {
    if(typeof str === 'string'){
        fs.appendFileSync('./test.txt', 'it is a String.\n');
    }
    else{
        fs.appendFileSync('./test.txt', 'it is Not a String.\n');
    }
}

function isArray(arr) {
    if(Array.isArray(arr)){
        fs.appendFileSync('./test.txt', 'it is a Array.\n');
    }
    else{
        fs.appendFileSync('./test.txt', 'it is Not a Array.\n');
    }
}

function isObj(obj) {
    if(Object.prototype.toString.call(obj) === '[object Object]'){
        fs.appendFileSync('./test.txt', 'this is a object.\n');
    }
    else{
        fs.appendFileSync('./test.txt', 'this is not a object.\n');
    }
}

function cls() {
    fs.unlink('./test.txt', (err) => {
        if(err){
            console.log('File could not delete.');
        }

        console.log('./test.txt is deleted');
    })
}

// Export All the functions

module.exports = {isNumber, isArray, isObj, isStr, cls};

