// const {sum, diff, mul, div} = require('./data');

// console.log(sum(4, 3));
// console.log(mul(4, 3));

const fs = require('fs');

const data = fs.readFileSync('./text.txt', 'utf-8')
    // if(err){
    //     console.log(err)
    // }
    // else{
    //     console.log(data)
    // }
    console.log(data);
    console.log('Hello');

    fs.writeFileSync('./text.txt', 'Hello Guys', (err) => {
        err ? console.log(err) : console.log('done');
    });


