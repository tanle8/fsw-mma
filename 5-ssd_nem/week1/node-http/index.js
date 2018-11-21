const http = require('http');   // Using HTTP core module
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;


// Setup a server
// require parameter is the incoming HTTP request to the server
const server = http.createServer((request, response) => {
    // the request object give us access to the header of the
    // incoming HTTP request
    console.log('Request for ' + request.url + ' by method ' + request.method);

    if (request.method == 'GET') {
        // If a GET request is comes in, then we'll examine that URL
        var fileUrl;
        // If we do not get a specific file name but you just send request
        // to localhost:3000. It will default to the index.html
        if (request.url == '/') fileUrl = '/index.html'
        else fileUrl = request.url;

        var filePath = path.resolve('./public' + fileUrl);
        // We find the path of
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            // Check if the file is existed
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    // If the file doesn't exist, we send a status code of 404
                    // saying you cannot find the file.
                    response.statusCode = 404;
                    response.setHeader('Content-Type', 'text/html');
                    response.end('<html><body><h1> Error 404: ' + fileUrl + ' not found </h1></body><html>');
                    return;
                }

                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(response);
            });
        } else {
            // If the file is not an HTML
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html');
            response.end('<html><body><h1> Error 404: ' + fileUrl + ' not an HTML file </h1></body><html>');
            return;
        }
    } else {
        // In this case, if the request method is not GET, we won't handle that
        // (In this case only)
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.end('<html><body><h1> Error 404: ' + request.method + ' not supported </h1></body><html>');
        return;
    }
});

// Start our server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

