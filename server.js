const http = require('http'); // the module that used for creating a SERVER locally without frame work

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'}); // the server response will be in plain text
    if(req.url === '/'){
        res.end('Welcome to our server');
    }
       else if(req.url === '/mlue'){
        res.end('We are 1.Developers\n2.Graphics Designers\n3.Software Engineers\n4.Freelancers');
    }
    else if(req.url === '/contact'){
        res.end('You can contact us at mluetechnologytz@gmail.com');
    }
    else{
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000,() => {
    console.log('server is listening at http://localhost:3000');
    // Open on your browser http://localhost:3000 to view what the server is responding with
});