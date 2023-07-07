const http = require("http");
const fs = require("fs");
const PORT = 7700;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.end(`<li><a>Home Page</a></li>`);
    }
});


server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

// export your server


  