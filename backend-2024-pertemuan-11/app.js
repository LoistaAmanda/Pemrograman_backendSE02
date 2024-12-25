// import express dan routing
const express = require("express");
//const router = require("./routes/api.js");

// Membuat object express
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Express");
});

app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});

// Menggunakan middleware
//app.use(express.json());
//app.use(express.urlencoded());

// Menggunakan routing (router)
//app.use(router);

// Mendefinisikan port.
//app.listen(3000);
