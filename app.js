const express = require("express");
const app = express();
const path = require("path");
/*
const PORT = 3000;

app.listen (PORT, () => {
    console.log("Se prendio");
});*/


const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "views/home.html"));
} );
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
} );

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
} );

app.use(express.static(path.join(__dirname, "public")));