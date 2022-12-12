const express = require("express");
const app = express();
const path = require("path");


app.listen (3000, () => {
    console.log("Se prendio");
});

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "views/home.html"));
} );

app.use(express.static(path.join(__dirname, "public")));