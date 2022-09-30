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
// const server = http.createServer((req, res) => {
//     // console.log(req.url);

//     if (req.url === '/') {
//       fs.readFile(
//         path.join(__dirname, 'public', 'index.html'),
//         (err, content) => {
//           if (err) throw err;
//           console.log("request page : index.html");
//           res.writeHead(200, { 'Content-Type': 'text/html' });
//           res.end(content);
//         }
//       );
//     }

// })

//? Level 3 : Routing
const server = http.createServer((req, res) => {
    // console.log(req.url);

    switch (req.url) {
        case '/':
            fs.readFile(
                path.join(__dirname, 'public', 'index.html'),
                (err, content) => {
                  if (err) throw err;
                  console.log("request page : index.html");
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.end(content);
                }
              );
            break;
        case '/about': 
            fs.readFile(
                path.join(__dirname, 'public', 'about.html'),
                (err, content) => {
                if (err) throw err;
                console.log("request page : about.html");
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
                }
            );
            break;
        case '/contact':
            const htmlPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(htmlPage)
            res.end();
            break;
        case "/contact.css" :
            const cssPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.css'));
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(cssPage)
            res.end();
            break;
        default:
            fs.readFile(
                path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                  if (err) throw err;
                  console.log("Client Error 404");
                  res.writeHead(404, { 'Content-Type': 'text/html' });
                  res.end(content);
                }
              );
            break;
    }

})


// Launching server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));