const http = require('http');   // Using HTTP core module

const hostname = 'localhost';
const port = 3000;

// Setup a server
// require parameter is the incoming HTTP request to the server
const server = http.createServer((require, response) => {
    // the request object give us access to the header of the
    // incoming HTTP request
    console.log(require.headers);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<html><body><h1>Hello, World!</h1></body></html>  ');
});

// Start our server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});