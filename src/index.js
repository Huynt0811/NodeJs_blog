const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./public")));
// HTTP logger
app.use(morgan("combined"));
// Template engine
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "ejs");

app.get("/", function(req, res, next) {
    let list = [
        { name: "PHP" },
        { name: "Ruby" },
        { name: "Java" },
        { name: "Python" },
        { name: "dotNet" },
        { name: "C#" },
        { name: "Swift" },
        { name: "Pascal" },
    ];
    res.render("layouts/main", { title: "Demo Ejs", list: list });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});