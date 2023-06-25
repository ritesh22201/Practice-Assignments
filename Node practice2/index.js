const fs = require('fs');

// fs.readFile('./text.txt', "utf-8", (err, data) => {
//     err ? console.log('Cannot read the file') : console.log(data);
// })

// let data = fs.readFileSync('./text.txt', "utf-8");
// console.log(data)

// fs.writeFile('./text.txt', 'My name is Bruce Wayne', (err) => {
//     if(err){
//         console.log(err);
//         console.log('Cannot write in the file.');
//     }
//     else{
//         console.log('Data has been written in the file.')
//     }
// });

fs.appendFile('./text.txt', 'My name is Tony Stark\n', (err) => {
    if(err) console.log(err)
    else console.log('Appended')
})

// fs.appendFile('./text.txt', 'My name is James Bond\n', (err) => {
//     if(err) console.log(err)
//     else console.log('Appended')
// })

// fs.appendFile('./text.txt', 'My name is Severus Snape\n', (err) => {
//     if(err) console.log(err)
//     else console.log('Appended')
// })

console.log('BYEEEE');