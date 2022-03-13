let express = require("express");
let app = express();
var bodyParser = require("body-parser");
// var router = require("./router");
const fcmSend = require("./send");

// create application/json parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// app.use("/",router);

app.listen(8083, () => {
  fcmSend.sendMsg();
  console.log("hii server.js");
});
