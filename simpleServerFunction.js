
// this is a simple server listening to a request and responding
// arrow function is also use
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Welcome to my page!</h1>');
});
//server listen on port and connecting to an IP address
server.listen(5000, '127.0.0.1', () => {
    console.log('Server rinning on PORT:5000');
    // at this level check the console to see the log message
    // open browser and go to 127.0.0.1:3000 to see results
})
