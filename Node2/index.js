const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('This is the Home Page');
        response.end();
    }
    else if(request.url === '/data'){
        fs.readFile('./data.json', (err, data) => {
            if(err){
                response.end(err);
            }
            else{
                response.end(data);
            }
        })
        // response.end('Some data will be sent');
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
        // response.end('Blog Data');
    }
    else{
        response.end(http.STATUS_CODES['404']);
    }
})

server.listen(7300, () =>{
    console.log('Server is running at port 7300');
})