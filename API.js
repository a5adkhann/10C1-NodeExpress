const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("<h2>Application Programming Interface</h2>");
//     res.end();
// }).listen(3000);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify([{ id: 1, name: "Shabbir", age: 22},{ id: 2, name: "Osama", age: 20},{ id: 3, name: "Owais", age: 21}]));
    res.end();
}).listen(3000);