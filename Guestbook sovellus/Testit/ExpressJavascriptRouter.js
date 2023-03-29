
var express = require("express");
var app = express();

app.use(express.static("./"));


app.get("/", function(req, res) {
    res.send("Hello World!");
  });


app.get("*", function(req, res) {
    res.send("Cant find the requested page", 404);
  });
  


app.listen(8082, function() {
    console.log("Example app listening on port 8081!");
  });


