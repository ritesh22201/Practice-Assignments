const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('This is the Home Page');
        response.end();
    }
    else if(request.url === '/data'){
        // fs.readFile('./data.json', (err, data) => {
        //     if(err){
        //         response.end(err);
        //     }
        //     else{
        //         response.end(data);
        //     }
        // })
        const dataStream = fs.createReadStream('./data.json', 'utf-8');
        dataStream.pipe(response);
    }
    else if(request.url === '/todo'){
        fs.readFile('./todo.json', (err, data) => {
            if(err){
                response.end(err);
            }
            else{
                response.end(data);
            }
        })
    }
    else if(request.url === '/addData' && request.method === 'POST'){
        let str = '';
        request.on('data', (chunk) => {
            str += chunk;
        })
        request.on('end', () => {
            console.log(str);
        })  
        response.end('Data Added');
    }
    else{
        response.end(http.STATUS_CODES['404']);
    }
})

server.listen(7300, () =>{
    console.log('Server is running at port 7300');
})