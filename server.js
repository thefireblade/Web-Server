// This server is dedicated to Jason Huang of Stony Brook University in year 2019
const express = require("express");

let app = express();
let router = express.Router();
app.engine(".html", require("ejs").__express);
//Set the views location and file format
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));