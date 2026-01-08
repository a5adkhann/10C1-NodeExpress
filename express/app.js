// importing
const express = require("express");


// execute
const app = express();

app.get("/", (req, res) => {
    res.send("Express JS Server");    
})

app.get("/about", (req, res) => {
    res.send("About page");    
})

app.get("/services", (req, res) => {
    res.send([{id: 1, name: "Ali"}]);    
})

app.listen(2000, () => {
    console.log("Server is running on port 2000");
});
