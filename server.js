// This server is dedicated to Jason Huang of Stony Brook University in year 2019
const express = require("express");
const session = require("express-session");
const WebSocket = require('ws');


const defaultRoutes = require("./routes/default.js");
let app = express();
let router = express.Router();
app.engine(".html", require("ejs").__express);
//Set the views location and file format
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));
//Session Expiration
app.use(
    session({
        secret: "You will soon expire soon!",
        cookie: { maxAge: 14400000 },
        resave: true,
        saveUninitialized: false
    })
);

app.get("/*", defaultRoutes);


var server = app.listen(3000, () => {
    console.log("server running on port", 3000);
});

WebSocket.createWebSocketStream(server);
