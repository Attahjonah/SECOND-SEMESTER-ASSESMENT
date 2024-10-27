const http = require("http");
const fs = require("fs");
const path = require("path");

const dbFilePath = path.join(__dirname, "db", "items.json");

const DBFile = [];

const HOSTNAME = "localhost";
const PORT = 8080;

function requestListener(req, res){
    if (req.url === "/items" && req.method === "GET"){
        getAllItems(req, res);
    } else if (req.url === "/items" && req.method === "POST"){
        addItem(req, res);
    } else if (req.url === "/items" && req.method === "PUT"){
        updateItem(req, res);
    } else if (req.url === "/items" && req.method === "DELETE"){
        deleteItem(req, res);
    } else if (req.url === "/items/:id" && req.method === "GET"){
        getOneItem(req, res);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
}

// GET ALL ITEMS
function getAllItems(req, res){
    fs.readFile(dbFilePath, "utf8", (err, data) =>{
        if (err){
            res.writeHead(400);
            res.end("An error occured while reading file");
        }
        res.writeHead(200);
        res.end(data);
    });
}

// ADD ITEM
function addItem(req, res){
    const body = [];
    req.on("data", (chunk) =>{
        body.push(chunk);
    });

    req.on("end", () =>{
        const parsedItem = Buffer.concat(body).toString();
        const newItem = JSON.parse(parsedItem);

        const lastItem = DBFile[DBFile.length -1];
        const lastItemId = lastItem.id;
        newItemId = lastItemId + 1;

        
        
        fs.readFile(dbFilePath, "utf8", (err, data) =>{
            if (err){
                res.writeHead(404);
                res.end("Item not found");
            }

            const existingItems = JSON.parse(data);
            allItems = [...existingItems, newItem];

            fs.writeFile(dbFilePath, JSON.stringify(allItems), (err) =>{
                if (err){
                    res.writeHead(500);
                    res.end('Server Error');
                }
                res.end(JSON.stringify(newItem));
            })
        })

    });
}

const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME, () =>{
    console.log(`Server listening at http://${HOSTNAME}:${PORT}`)
});