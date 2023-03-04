
// this is a simple server listening to a request and responding
// arrow function is also use
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Welcome to my page!</h1>');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server rinning...');
    // at this level check the console to see the log message
    // open browser and go to 127.0.0.1:3000 to see results
})
