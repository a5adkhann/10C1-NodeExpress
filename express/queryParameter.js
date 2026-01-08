const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.get("/about", (req, res) => {
    const name = req.query.name;
    res.send(`Welcome ${name}`);
})

app.get("/contact", (req, res) => {
    res.send("Contact Page");
})


app.listen(2000, () => {
    console.log("Server Started");
})