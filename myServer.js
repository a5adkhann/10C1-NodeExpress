const http = require("http");


http.createServer((request, response) => {
    response.write("I am using HTTP Core Module");
    response.end();
}).listen(2000);