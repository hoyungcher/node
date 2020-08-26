// import http library
const http = require('http');

// create a server which takes in a function with two arguments(request & response)
const server = http.createServer((req, res) => {
    // request contains different data
    const url = req.url;
    // routes below
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write(<head><title>Assignment 1</title></head>);
        res.write(<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form></body>)
        res.write('</html>')
        return res.end();
    } 

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('</html>')
        return res.end();
    }
})