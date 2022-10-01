// Requirements
const http = require("http");
const path = require("path");
const fs = require("fs");

// To launch the app, uncomment one of the levels, and the type `npm run serve`

// Note that to deploy this app (in heroku for ex), two things are important :
//   - `npm start` script in npm scripts, the deployement service will look for it
//   - The process.env.PORT is essential to deploy on the right port (you can check it at the bottom of the page)

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
// const server = http.createServer((req, res) => {
//     // console.log(req.url);

//     switch (req.url) {
//         case '/':
//             fs.readFile(
//                 path.join(__dirname, 'public', 'index.html'),
//                 (err, content) => {
//                   if (err) throw err;
//                   console.log("request page : index.html");
//                   res.writeHead(200, { 'Content-Type': 'text/html' });
//                   res.end(content);
//                 }
//               );
//             break;
//         case '/about': 
//             fs.readFile(
//                 path.join(__dirname, 'public', 'about.html'),
//                 (err, content) => {
//                 if (err) throw err;
//                 console.log("request page : about.html");
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(content);
//                 }
//             );
//             break;
//         case '/contact':
//             const htmlPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.html'));
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(htmlPage)
//             res.end();
//             break;
//         case "/contact.css" :
//             const cssPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.css'));
//             res.writeHead(200, { 'Content-Type': 'text/css' });
//             res.write(cssPage)
//             res.end();
//             break;
//         default:
//             fs.readFile(
//                 path.join(__dirname, 'public', '404.html'),
//                 (err, content) => {
//                   if (err) throw err;
//                   console.log("Client Error 404");
//                   res.writeHead(404, { 'Content-Type': 'text/html' });
//                   res.end(content);
//                 }
//               );
//             break;
//     }

// })

//? Level 4 : API Serving
// const server = http.createServer((req, res) => {

//     const myUrl = new URL('http://localhost:5000' + req.url)

//     switch (myUrl.pathname) {
//         case '/':
//             fs.readFile(
//                 path.join(__dirname, 'public', 'index.html'),
//                 (err, content) => {
//                   if (err) throw err;
//                   console.log("request page : index.html");
//                   res.writeHead(200, { 'Content-Type': 'text/html' });
//                   res.end(content);
//                 }
//               );
//             break;
//         case '/about': 
//             fs.readFile(
//                 path.join(__dirname, 'public', 'about.html'),
//                 (err, content) => {
//                 if (err) throw err;
//                 console.log("request page : about.html");
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(content);
//                 }
//             );
//             break;
//         case '/contact':
//             const htmlPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.html'));
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(htmlPage)
//             res.end();
//             break;
//         case "/contact.css" :
//             const cssPage = fs.readFileSync(path.join(__dirname, 'public', 'contact.css'));
//             res.writeHead(200, { 'Content-Type': 'text/css' });
//             res.write(cssPage)
//             res.end();
//             break;
//         case '/api/comments':
//             // See available properties
//             // console.log(req)
//             let data = require('./storage/comments.json')
//             switch (req.method) {
//                 case "GET":
//                     res.writeHead(200, 'application/json')
//                     res.end(JSON.stringify(data));
//                     break;
//                 case 'POST':
//                     let addedData = {}
//                     myUrl.searchParams.forEach((value, key) => {
//                         addedData[key] = value
//                     })
//                     data = [...data, addedData]
//                     fs.writeFileSync("storage/comments.json", JSON.stringify(data))
//                     res.writeHead(200, 'application/json')
//                     res.end("Added Successfully")
//                     break;
//                 default:
//                     res.end("Request Method not Supported")
//                     break;
//             }
//         break;
//         default:
//             fs.readFile(
//                 path.join(__dirname, 'public', '404.html'),
//                 (err, content) => {
//                     if (err) throw err;
//                     console.log("Client Error 404");
//                     res.writeHead(404, { 'Content-Type': 'text/html' });
//                     res.end(content);
//                 }
//                 );
//         break;
//     }

// })

//? Level 5 : Advanced Files Routing

const server = http.createServer((req, res) => {

    const myUrl = new URL('http://localhost:5000' + req.url)

    switch (myUrl.pathname) {
        case '/api/comments':
            // See available properties
            // console.log(req)
            let data = require('./storage/comments.json')
            switch (req.method) {
                case "GET":
                    res.writeHead(200, 'application/json')
                    res.end(JSON.stringify(data));
                    break;
                case 'POST':
                    let addedData = {}
                    myUrl.searchParams.forEach((value, key) => {
                        addedData[key] = value
                    })
                    data = [...data, addedData]
                    fs.writeFileSync("storage/comments.json", JSON.stringify(data))
                    res.writeHead(200, 'application/json')
                    res.end("Added Successfully")
                    break;
                default:
                    res.end("Request Method not Supported")
                    break;
            }
        break;
        default:
            // Build file path
            let filePath = path.join(
                __dirname,
                "public",
                myUrl.pathname === "/" ? "index.html" : myUrl.pathname
            );

            // Extension of file
            let extname = path.extname(filePath);

            // Initial content type
            let contentType = "text/html";

            // Check ext and set content type
            switch (extname) {
                case ".js":
                contentType = "text/javascript";
                break;
                case ".css":
                contentType = "text/css";
                break;
                case ".json":
                contentType = "application/json";
                break;
                case ".png":
                contentType = "image/png";
                break;
                case ".jpg":
                contentType = "image/jpg";
                break;
                case ".jpeg":
                contentType = "image/jpeg";
                break;
                case ".svg":
                contentType = "image/svg+xml";
                break;
            }

            // Check if contentType is text/html but no .html file extension
            if (contentType == "text/html" && extname == "") filePath += ".html";

            // log the filePath
            console.log(filePath);

            // Read File
            fs.readFile(filePath, (err, content) => {
                if (err) {
                if (err.code == "ENOENT") {
                    // Page not found
                    fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                    }
                    );
                } else {
                    //  Some server error
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
                } else {
                // Success
                res.writeHead(200, { "Content-Type": contentType });
                res.end(content, "utf8");
                }
            });
        break;
    }
})


// Launching server
const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));