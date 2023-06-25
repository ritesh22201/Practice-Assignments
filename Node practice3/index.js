const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the home page');
    }
    else if (req.url === '/data') {
        // fs.readFile('./data.json', (err, data) => {
        //     if (err) {
        //         res.end(err);
        //     }
        //     else {
        //         res.end(data);
        //     }
        // })

        const dataStream = fs.createReadStream('./data.json', 'utf-8');
        dataStream.pipe(res);
    }
    else if (req.url === '/todos') {
        fs.readFile('./todo.json', (err, data) => {
            if (err) {
                res.write(err);
                res.end();
            }
            else {
                res.end(data);
            }
        })
    }
    else if(req.url === '/adddata', req.method === 'POST'){
        // console.log(req.body);
        let str = '';
        req.on('data', (chunk) => {
            str += chunk;
        })
        req.on('end', () => {
            console.log(str);
        })
        res.end('Data has been added');
    }
    else {
        res.end(http.STATUS_CODES["404"]);
    }
})

server.listen(4500, () => {
    console.log('Server is running at 4500');
})

