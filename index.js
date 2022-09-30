// Requirements
const http = require("http");
const path = require("path");
const fs = require("fs");

//? Level 1 : Discovery
// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     if (req.url == "/") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end("<h1>Home Page</h1>")
//     }

// })

//? Level 2 : Loading File
const server = http.createServer((req, res) => {
    // console.log(req.url);

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
          if (err) throw err;
          console.log("request page : index.html");
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      );
    }

})


// Launching server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));