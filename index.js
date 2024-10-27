const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "index.html");

const HOSTNAME ="localhost";
const PORT = 1000;

function requestHandler(req, res){
    if (req.url === "/index.html" && req.method ==="GET"){
        fs.readFile(filePath, "utf8", (err, data) =>{
            if (err){
                res.writeHead(500);
                res.end("An error occured while reading the file");
            } else {
                res.writeHead(200);
                res.end(data);
                
            }
        });

    } else {
        if (req.url !== "/index.html" && req.method ==="GET"){
            res.writeHead(404);
            res.end("File not found");
        }
    }
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () =>{
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
